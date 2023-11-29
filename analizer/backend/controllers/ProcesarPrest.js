const path = require('path');
const fs = require('fs').promises;
const xlsx = require('xlsx');
const { SimaPres, AdmPres, FacPres, AmupPres } = require('../model/ModelDatosEvol');

const carpetaEsquemaMapping = {
    "PRESTAMOSSIMA": SimaPres,
    "PRESTAMOSADM": AdmPres,
    "PRESTAMOSFAC": FacPres,
    "PRESTAMOSAMUP": AmupPres
};

async function procesarArchivoExcel(rutaArchivo, esquema) {
    try {
        console.log(`Procesando archivo: ${rutaArchivo}`);
        const workbook = xlsx.readFile(rutaArchivo);
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const registrosAInsertar = [];

        for (let rowIndex = 2; ; rowIndex++) {
            const rowData = {};
            rowData.NumeroDeDoc = sheet[`A${rowIndex}`]?.v || '';
            rowData.Nprest = sheet[`B${rowIndex}`]?.v || '';
            rowData.CapOtorgado = sheet[`C${rowIndex}`]?.v || '';
            rowData.CantCuot = sheet[`D${rowIndex}`]?.v || '';
            rowData.ImpTot = sheet[`E${rowIndex}`]?.v || '';
            rowData.CuotPend = sheet[`F${rowIndex}`]?.v || '';
            rowData.FormCobro = sheet[`G${rowIndex}`]?.v || '';
            rowData.UltCob = sheet[`H${rowIndex}`]?.v || '';
            rowData.UltRec = sheet[`I${rowIndex}`]?.v || '';
            rowData.Observac = sheet[`J${rowIndex}`]?.v || '';
            rowData.Inv = sheet[`K${rowIndex}`]?.v || '';
            


        

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
