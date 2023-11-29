const path = require("path");
const fs = require("fs").promises;
const xlsx = require("xlsx");
const {
  AmuprobaSoc,
  AdmSoc,
  SimaSoc,
  FacSoc,
} = require("../model/ModelDatosEvol");
const carpetaEsquemaMapping = {
  SOCIOSADM: AdmSoc,
  SOCIOSSIMA: SimaSoc,
  SOCIOSFAC: FacSoc,
  SOCIOSAMUP: AmuprobaSoc,
};

async function procesarArchivoExcel(rutaArchivo, esquema) {
  try {
    console.log(`Procesando archivo: ${rutaArchivo}`);
    const workbook = xlsx.readFile(rutaArchivo);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const registrosAInsertar = [];

    for (let rowIndex = 2; sheet[`A${rowIndex}`]; rowIndex++) {
      const rowData = {};
      rowData.Nombre = sheet[`A${rowIndex}`]?.v || "";
      rowData.Apellido = sheet[`B${rowIndex}`]?.v || "";
      rowData.NumeroDeDoc = sheet[`C${rowIndex}`]?.v || "";
      rowData.NumSoc = sheet[`D${rowIndex}`]?.v || "";
      rowData.Categor = sheet[`E${rowIndex}`]?.v || "";
      rowData.Estad = sheet[`F${rowIndex}`]?.v || "";
      rowData.Depen = sheet[`G${rowIndex}`]?.v || "";

      if (
        rowData.Nombre !== "" ||
        rowData.Apellido !== "" ||
        rowData.NumeroDeDoc !== "" ||
        rowData.NumSoc !== "" ||
        rowData.Categor !== "" ||
        rowData.Estad !== "" ||
        rowData.Depen !== ""
      ) {
        const existingRecord = await esquema.findOne({
          NumeroDeDoc: rowData.NumeroDeDoc,
        });
        if (!existingRecord) {
          registrosAInsertar.push(rowData);
        }
      } else {
        break;
      }
    }

    console.log("Registros a insertar:", registrosAInsertar);

    if (registrosAInsertar.length > 0) {
      await esquema.insertMany(registrosAInsertar);
      console.log(
        `Se insertaron ${registrosAInsertar.length} registros en la base de datos.`
      );
    } else {
      console.log(`No se insertaron nuevos datos de ${rutaArchivo}.`);
    }
  } catch (error) {
    throw new Error(
      `Error procesando el archivo ${rutaArchivo}: ${error.message}`
    );
  }
}

async function procesarArchivosEnCarpeta(carpeta) {
  try {
    const carpetas = await fs.readdir(carpeta);
    const promesas = carpetas.map(async (carpetaNombre) => {
      const carpetaPath = path.join(carpeta, carpetaNombre);
      const esquema = carpetaEsquemaMapping[carpetaNombre];
      if (esquema) {
        const archivos = await fs.readdir(carpetaPath);
        const archivosXLSX = archivos.filter((archivo) =>
          archivo.endsWith(".xlsx")
        );
        for (const archivo of archivosXLSX) {
          const rutaArchivo = path.join(carpetaPath, archivo);
          await procesarArchivoExcel(rutaArchivo, esquema);
        }
      }
    });
    await Promise.all(promesas);
  } catch (error) {
    console.error(
      `Error al procesar los archivos en la carpeta ${carpeta}: ${error.message}`
    );
  }
}

async function main() {
  const carpetaExcel = "./public/excels";
  await Promise.all([
    AdmSoc.collection.createIndex({ NumeroDeDoc: 1 }),
    SimaSoc.collection.createIndex({ NumeroDeDoc: 1 }),
    FacSoc.collection.createIndex({ NumeroDeDoc: 1 }),
    AmuprobaSoc.collection.createIndex({ NumeroDeDoc: 1 }),
  ]);
  await procesarArchivosEnCarpeta(carpetaExcel);
}

main();
