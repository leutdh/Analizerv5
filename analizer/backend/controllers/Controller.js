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


const encabezadosDeseados = {
  Periodo: "Periodo",
  NumDoc: "NumeroDocumento",
  Concept: "Concepto",
  FormCobro: "FormaCobro",
  Dependencia: "Dependencia",
  impEnviado: "ImporteEnviado",
  impCobrado: "ImporteCobrado",
  Estado: "Estado",
  Observac: "Observaciones",
  Inversor: "InversorGral",
};

async function procesarFila(fila, encabezadosDeseados) {
  const rowData = {};

  // Obtener la fila que contiene los encabezados (ahora es la 4)
  const headerRow = fila.worksheet.getRow(4);

  // Mapear encabezados a número de columna
  const columnIndices = {};

  headerRow.eachCell({ includeEmpty: true }, (cell, colNumber) => {
    const cellValue = cell.value;
    const matchingEncabezado = Object.keys(encabezadosDeseados).find(
      (encabezado) => encabezadosDeseados[encabezado] === cellValue
    );

    if (matchingEncabezado) {
      columnIndices[matchingEncabezado] = colNumber;
    }
  });

  // Extraer datos según los encabezados mapeados
  Object.keys(encabezadosDeseados).forEach((encabezado) => {
    const columnIndex = columnIndices[encabezado];
    if (columnIndex !== undefined) {
      rowData[encabezado] = fila.getCell(columnIndex).value || "";
    } else {
      console.error(
        `No se encontró la columna para el encabezado: ${encabezado}`
      );
    }
  });

  return rowData;
}

async function procesarArchivoExcel(rutaArchivo, esquema) {
  try {
    console.log(`Procesando archivo: ${rutaArchivo}`);
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(rutaArchivo);
    const worksheet = workbook.getWorksheet(1);
    const registrosAInsertar = [];

    for (let rowNumber = 4; rowNumber <= worksheet.rowCount; rowNumber++) {
      const rowData = await procesarFila(
        worksheet.getRow(rowNumber),
        encabezadosDeseados
      );

      // Elimina la verificación de duplicados
      registrosAInsertar.push(rowData);
    }

    if (registrosAInsertar.length > 0) {
      try {
        const batchSize = 100; // Ajusta el tamaño del lote según sea necesario

        for (let i = 0; i < registrosAInsertar.length; i += batchSize) {
          await esquema.insertMany(registrosAInsertar.slice(i, i + batchSize), {
            ordered: false,
          });
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
