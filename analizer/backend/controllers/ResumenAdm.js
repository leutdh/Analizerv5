const path = require('path');
const fs = require('fs').promises;
const xlsx = require('xlsx');
const { ResumenAdm } = require('../model/ModelDatosEvol');

const carpetaEsquemaMapping = {
  "RESUMENADM": ResumenAdm,
};

async function procesarArchivoExcel(rutaArchivo, esquema) {
  try {
    console.log(`Procesando archivo: ${rutaArchivo}`);
    const workbook = xlsx.readFile(rutaArchivo);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const registrosAInsertar = [];



    for (let rowIndex = 2; ; rowIndex++) {
        const rowData = {};
        rowData.APELLIDO_Y_NOMBRE = sheet[`A${rowIndex}`]?.v || '';
        rowData.NumeroDeDoc = sheet[`B${rowIndex}`]?.v || '';
        rowData.IMPORTE = Number(sheet[`C${rowIndex}`]?.v) || sheet[`C${rowIndex}`]?.v || '';
        rowData.PLAN = Number(sheet[`D${rowIndex}`]?.v) || sheet[`D${rowIndex}`]?.v || '';
        rowData.INV = sheet[`E${rowIndex}`]?.v || ''; // Mantener como cadena de texto
        rowData.may20 = Number(sheet[`F${rowIndex}`]?.v) || sheet[`F${rowIndex}`]?.v || '';
        rowData.jun20 = Number(sheet[`G${rowIndex}`]?.v) || sheet[`G${rowIndex}`]?.v || '';
        rowData.jul20 = Number(sheet[`H${rowIndex}`]?.v) || sheet[`H${rowIndex}`]?.v || '';
        rowData.ago20 = Number(sheet[`I${rowIndex}`]?.v) || sheet[`I${rowIndex}`]?.v || '';
        rowData.sep20 = Number(sheet[`J${rowIndex}`]?.v) || sheet[`J${rowIndex}`]?.v || '';
        rowData.oct20 = Number(sheet[`K${rowIndex}`]?.v) || sheet[`K${rowIndex}`]?.v || '';
        rowData.nov20 = Number(sheet[`L${rowIndex}`]?.v) || sheet[`L${rowIndex}`]?.v || '';
        rowData.dic20 = Number(sheet[`M${rowIndex}`]?.v) || sheet[`M${rowIndex}`]?.v || '';
        rowData.ene21 = Number(sheet[`N${rowIndex}`]?.v) || sheet[`N${rowIndex}`]?.v || '';
        rowData.feb21 = Number(sheet[`O${rowIndex}`]?.v) || sheet[`O${rowIndex}`]?.v || '';
        rowData.mar21 = Number(sheet[`P${rowIndex}`]?.v) || sheet[`P${rowIndex}`]?.v || '';
        rowData.abr21 = Number(sheet[`Q${rowIndex}`]?.v) || sheet[`Q${rowIndex}`]?.v || '';
        rowData.may21 = Number(sheet[`R${rowIndex}`]?.v) || sheet[`R${rowIndex}`]?.v || '';
        rowData.jun21 = Number(sheet[`S${rowIndex}`]?.v) || sheet[`S${rowIndex}`]?.v || '';
        rowData.jul21 = Number(sheet[`T${rowIndex}`]?.v) || sheet[`T${rowIndex}`]?.v || '';
        rowData.ago21 = Number(sheet[`U${rowIndex}`]?.v) || sheet[`U${rowIndex}`]?.v || '';
        rowData.sep21 = Number(sheet[`V${rowIndex}`]?.v) || sheet[`V${rowIndex}`]?.v || '';
        rowData.oct21 = Number(sheet[`W${rowIndex}`]?.v) || sheet[`W${rowIndex}`]?.v || '';
        rowData.nov21 = Number(sheet[`X${rowIndex}`]?.v) || sheet[`X${rowIndex}`]?.v || '';
        rowData.dic21 = Number(sheet[`Y${rowIndex}`]?.v) || sheet[`Y${rowIndex}`]?.v || '';
        rowData.ene22 = Number(sheet[`Z${rowIndex}`]?.v) || sheet[`Z${rowIndex}`]?.v || '';
        rowData.feb22 = Number(sheet[`AA${rowIndex}`]?.v) || sheet[`AA${rowIndex}`]?.v || '';
        rowData.mar22 = Number(sheet[`AB${rowIndex}`]?.v) || sheet[`AB${rowIndex}`]?.v || '';
        rowData.abr22 = Number(sheet[`AC${rowIndex}`]?.v) || sheet[`AC${rowIndex}`]?.v || '';
        rowData.may22 = Number(sheet[`AD${rowIndex}`]?.v) || sheet[`AD${rowIndex}`]?.v || '';
        rowData.jun22 = Number(sheet[`AE${rowIndex}`]?.v) || sheet[`AE${rowIndex}`]?.v || '';
        rowData.jul22 = Number(sheet[`AF${rowIndex}`]?.v) || sheet[`AF${rowIndex}`]?.v || '';
        rowData.ago22 = Number(sheet[`AG${rowIndex}`]?.v) || sheet[`AG${rowIndex}`]?.v || '';
        rowData.sep22 = Number(sheet[`AH${rowIndex}`]?.v) || sheet[`AH${rowIndex}`]?.v || '';
        rowData.oct22 = Number(sheet[`AI${rowIndex}`]?.v) || sheet[`AI${rowIndex}`]?.v || '';
        rowData.nov22 = Number(sheet[`AJ${rowIndex}`]?.v) || sheet[`AJ${rowIndex}`]?.v || '';
        rowData.dic22 = Number(sheet[`AK${rowIndex}`]?.v) || sheet[`AK${rowIndex}`]?.v || '';
        rowData.ene23 = Number(sheet[`AL${rowIndex}`]?.v) || sheet[`AL${rowIndex}`]?.v || '';
        rowData.feb23 = Number(sheet[`AM${rowIndex}`]?.v) || sheet[`AM${rowIndex}`]?.v || '';
        rowData.mar23 = Number(sheet[`AN${rowIndex}`]?.v) || sheet[`AN${rowIndex}`]?.v || '';
        rowData.abr23 = Number(sheet[`AO${rowIndex}`]?.v) || sheet[`AO${rowIndex}`]?.v || '';
        rowData.may23 = Number(sheet[`AP${rowIndex}`]?.v) || sheet[`AP${rowIndex}`]?.v || '';
        rowData.jun23 = Number(sheet[`AQ${rowIndex}`]?.v) || sheet[`AQ${rowIndex}`]?.v || '';
        rowData.jul23 = Number(sheet[`AR${rowIndex}`]?.v) || sheet[`AR${rowIndex}`]?.v || '';
        rowData.ago23 = Number(sheet[`AS${rowIndex}`]?.v) || sheet[`AS${rowIndex}`]?.v || '';
        rowData.sept23 = Number(sheet[`AT${rowIndex}`]?.v) || sheet[`AT${rowIndex}`]?.v || '';
        rowData.CANCELACION = Number(sheet[`AU${rowIndex}`]?.v) || sheet[`AU${rowIndex}`]?.v || '';
        rowData.COBRADOPORBAPRO = Number(sheet[`AV${rowIndex}`]?.v) || sheet[`AV${rowIndex}`]?.v || '';
        rowData.REINTEGRADO = Number(sheet[`AW${rowIndex}`]?.v) || sheet[`AW${rowIndex}`]?.v || '';
        rowData.TOTAL = Number(sheet[`AX${rowIndex}`]?.v) || sheet[`AX${rowIndex}`]?.v || '';
        rowData.CUOTAPAGADAS = Number(sheet[`AY${rowIndex}`]?.v) || sheet[`AY${rowIndex}`]?.v || '';
        rowData.CUOTAPEND = Number(sheet[`AZ${rowIndex}`]?.v) || sheet[`AZ${rowIndex}`]?.v || '';
        rowData.OBSERVACION = sheet[`BA${rowIndex}`]?.v || ''; // Mantener como cadena de texto
    
        if (
            Object.values(rowData).some(value => value !== '')
        ) {
            registrosAInsertar.push(rowData);
        } else {
            break;
        }
    }
    
    if (registrosAInsertar.length > 0) {
      await esquema.insertMany(registrosAInsertar);
      console.log(`Se insertaron ${registrosAInsertar.length} registros en la base de datos.`);
    } else {
      console.log(`No se insertaron nuevos datos de ${rutaArchivo}.`);
    }
  } catch (error) {
    throw new Error(`Error procesando el archivo ${rutaArchivo}: ${error.message}`);
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
        const archivosXLSX = archivos.filter((archivo) => archivo.endsWith('.xlsx'));
        for (const archivo of archivosXLSX) {
          const rutaArchivo = path.join(carpetaPath, archivo);
          await procesarArchivoExcel(rutaArchivo, esquema);
        }
      }
    });
    await Promise.all(promesas);
  } catch (error) {
    console.error(`Error al procesar los archivos en la carpeta ${carpeta}: ${error.message}`);
  }
}

async function main() {
  const carpetaExcel = './public/excels';
  await procesarArchivosEnCarpeta(carpetaExcel);
}

main();
