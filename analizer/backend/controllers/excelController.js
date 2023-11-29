const path = require("path");
const fs = require("fs").promises;
const ExcelJS = require("exceljs");
const {
  AdmEvol,
  SimaEvol,
  FacilitarEvol,
  AmuprobaEvol,
} = require("../model/ModelDatosEvol");

const carpetaEsquemaMapping = {
  ADM: AdmEvol,
  SIMA: SimaEvol,
  FACILITAR: FacilitarEvol,
  AMUPROBA: AmuprobaEvol,
};

async function procesarFila(fila) {
  const rowData = {
    Periodo: fila.getCell(1).value || "",
    NumDoc: fila.getCell(2).value || "",
    Name: fila.getCell(3).value || "",
    Concept: fila.getCell(4).value || "",
    FormCobro: fila.getCell(5).value || "",
    Dependencia: fila.getCell(6).value || "",
    impEnviado: fila.getCell(7).value || "",
    impCobrado: fila.getCell(8).value || "",
    Estado: fila.getCell(9).value || "",
    Observac: fila.getCell(10).value || "",
  };
  return rowData;
}

async function procesarArchivoExcel(rutaArchivo, esquema) {
  try {
    console.log(`Procesando archivo: ${rutaArchivo}`);
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(rutaArchivo);
    const worksheet = workbook.getWorksheet(1);
    const registrosAInsertar = [];
    for (let rowNumber = 2; rowNumber <= worksheet.rowCount; rowNumber++) {
      const rowData = await procesarFila(worksheet.getRow(rowNumber));
      registrosAInsertar.push(rowData);
    }
    if (registrosAInsertar.length > 0) {
      try {
        for (let i = 0; i < registrosAInsertar.length; i += 1000) {
          await esquema.insertMany(registrosAInsertar.slice(i, i+1000));
        }
        console.log(
          `Se insertaron ${registrosAInsertar.length} registros en la base de datos.`
        );
      } catch (error) {
        console.error(
          `Error insertando registros en la base de datos: ${error.message}`
        );
      }
    } else {
      console.log(`No se insertaron nuevos datos de ${rutaArchivo}.`);
    }
  } catch (error) {
    console.error(
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
  await procesarArchivosEnCarpeta(carpetaExcel);
}

main();
