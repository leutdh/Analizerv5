const path = require("path");
const fs = require("fs").promises;
const xlsx = require("xlsx");
const { format, parse } = require('date-fns');
const {
  SimaCarg,
  AdmCarg,
  FacCarg,
  AmupCarg,
} = require("../model/ModelDatosEvol");

const carpetaEsquemaMapping = {
  CARGOSADM: AdmCarg,
  CARGOSSIMA: SimaCarg,
  CARGOSFAC: FacCarg,
  CARGOSAMUP: AmupCarg,
};


async function procesarArchivoExcel(rutaArchivo, esquema, session) {
  try {
    console.log(`Procesando archivo: ${rutaArchivo}`);
    const workbook = await xlsx.readFile(rutaArchivo);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const registrosAInsertar = [];

    for (let rowIndex = 2; sheet[`A${rowIndex}`]?.v; rowIndex++) {
      const rowData = {
        NumeroDeDoc: sheet[`A${rowIndex}`]?.v || "",
        Cargo: sheet[`B${rowIndex}`]?.v || "",
        ImpCuot: sheet[`C${rowIndex}`]?.v || "",
        FormCobro: sheet[`D${rowIndex}`]?.v || "",
        Estado: sheet[`E${rowIndex}`]?.v || "",
        Inversor: sheet[`G${rowIndex}`]?.v || "",

      };
      
      if (Object.values(rowData).some((value) => value !== "")) {
        registrosAInsertar.push(rowData);
      }
    }

    if (registrosAInsertar.length > 0) {
      // Insertar registros dentro de la transacción
      await esquema.insertMany(
        registrosAInsertar.map((data) => ({
         
          NumeroDeDoc: data.NumeroDeDoc,
          Cargo: data.Cargo,
          ImpCuot: data.ImpCuot,
          FormCobro: data.FormCobro,
          Estado: data.Estado, // Utiliza la fecha formateada en formato ISO 8601
          Inversor: data.Inversor,
        })),
        { session }
      );
      console.log(
        `Se insertaron ${registrosAInsertar.length} registros en la base de datos desde ${rutaArchivo}.`
      );
    } else {
      console.log(`No se insertaron nuevos datos de ${rutaArchivo}.`);
    }
  } catch (error) {
    console.error(
      `Error procesando el archivo ${rutaArchivo}: ${error.message}`
    );
    // Registra el error en un archivo de registro o base de datos
  }
}

async function procesarArchivosEnCarpeta(carpeta) {
  const session = await AdmCarg.startSession(); // Inicializa la sesión
  session.startTransaction(); // Inicia la transacción

  try {
    const carpetas = await fs.readdir(carpeta);

    for (const carpetaNombre of carpetas) {
      const carpetaPath = path.join(carpeta, carpetaNombre);
      const esquema = carpetaEsquemaMapping[carpetaNombre];
      if (esquema) {
        const archivos = await fs.readdir(carpetaPath);
        const archivosXLSX = archivos.filter((archivo) =>
          archivo.endsWith(".xlsx")
        );
        for (const archivo of archivosXLSX) {
          const rutaArchivo = path.join(carpetaPath, archivo);
          await procesarArchivoExcel(rutaArchivo, esquema, session);
        }
      }
    }

    await session.commitTransaction(); // Confirma la transacción
  } catch (error) {
    console.error(
      `Error al procesar los archivos en la carpeta ${carpeta}: ${error.message}`
    );
    await session.abortTransaction(); // Aborta la transacción en caso de error
  } finally {
    session.endSession(); // Finaliza la sesión
  }
}

async function main() {
  const carpetaExcel = "./public/excels";
  try {
    await procesarArchivosEnCarpeta(carpetaExcel);
  } catch (error) {
    console.error(`Error en la ejecución principal: ${error.message}`);
  }
}

main();
