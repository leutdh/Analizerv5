const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const adminSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
    },
    { collection: "Admins" }
  );
 /* // Hash password antes de guardar
  adminSchema.pre("save", async function (next) {
    // Corrige "UserSchema" a "adminSchema"
    const user = this;
    if (user.isModified("password")) {
      user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});
*/

const AdmSchemaEvol = new mongoose.Schema({
    Periodo: String, 
    NumDoc: String,
    Concept: String,
    FormCobro: String,
    Dependencia: String,
    impEnviado: String,
    impCobrado: String,
    Estado: String,
    Observac: String,
    Inversor: String,
    // Agrega otros campos según tus necesidades
}, { collection: 'AdmEvol' });

const AdmPrueba = new mongoose.Schema({
    Periodo: String, 
    NumDoc: String,
    Name: String,
    Concept: String,
    FormCobro: String,
    Dependencia: String,
    impEnviado: String,
    impCobrado: String,
    Estado: String,
    Observac: String,
    Inversor: String,
    // Agrega otros campos según tus necesidades
}, { collection: 'AdmPrueba' });



const SimaSchemaEvol = new mongoose.Schema({
    Periodo: String, 
    NumDoc: String,
    Concept: String,
    FormCobro: String,
    Dependencia: String,
    impEnviado: String,
    impCobrado: String,
    Estado: String,
    Observac: String,
    Inversor: String,
    // Agrega otros campos según tus necesidades
},{ collection: 'SimaEvol' });



const FacilitarSchemaEvol = new mongoose.Schema({
    Periodo: String, 
    NumDoc: String,
    Concept: String,
    FormCobro: String,
    Dependencia: String,
    impEnviado: String,
    impCobrado: String,
    Estado: String,
    Observac: String,
    Inversor: String,
    // Agrega otros campos según tus necesidades
},{ collection: 'FacilitarEvol' });



const AmuprobaSchemaEvol = new mongoose.Schema({
    Periodo: String, 
    NumDoc: String,
    Concept: String,
    FormCobro: String,
    Dependencia: String,
    impEnviado: String,
    impCobrado: String,
    Estado: String,
    Observac: String,
    Inversor: String,
    // Agrega otros campos según tus necesidades
},{ collection: 'AmuprobaEvol' });



const AmuprobaSchemaSoc = new mongoose.Schema({
    Nombre: String,
    Apellido: String,
    NumeroDeDoc: String,
    NumSoc: String,
    Categor: String,
    Estad: String,
    Depen: String,
    
    // Agrega otros campos según tus necesidades
},{ collection: 'AmuprobaSoc' });

const SimaSchemaSoc = new mongoose.Schema({
    Nombre: String,
    Apellido: String,
    NumeroDeDoc: String,
    NumSoc: String,
    Categor: String,
    Estad: String,
    Depen: String,
    
    // Agrega otros campos según tus necesidades
},{ collection: 'SimaSoc' });

const AdmSchemaSoc = new mongoose.Schema({
    Nombre: String,
    Apellido: String,
    NumeroDeDoc: String,
    NumSoc: String,
    Categor: String,
    Estad: String,
    Depen: String,
    
    // Agrega otros campos según tus necesidades
},{ collection: 'AdmSoc' });

const FacSchemaSoc = new mongoose.Schema({
    Nombre: String,
    Apellido: String,
    NumeroDeDoc: String,
    NumSoc: String,
    Categor: String,
    Estad: String,
    Depen: String,
    
    // Agrega otros campos según tus necesidades
},{ collection: 'FacSoc' });

const resuSimaSchemaSoc = new mongoose.Schema({
    APELLIDO_Y_NOMBRE: String,
    NumeroDeDoc: String,
    IMPORTE: String,
    PLAN: String,
    INV: String,
    abr20: String,
    may20: String,
    jun20: String,
    jul20: String,
    ago20: String,
    sep20: String,
    oct20: String,
    nov20: String,
    dic20: String,
    ene21: String,
    feb21: String,
    mar21: String,
    abr21: String,
    may21: String,
    jun21: String,
    jul21: String,
    ago21: String,
    sep21: String,
    oct21: String,
    nov21: String,
    dic21: String,
    ene22: String,
    feb22: String,
    mar22: String,
    abr22: String,
    may22: String,
    jun22: String,
    jul22: String,
    ago22: String,
    sep22: String,
    oct22: String,
    nov22: String,
    dic22: String,
    ene23: String,
    feb23: String,
    mar23: String,
    abr23: String,
    may23: String,
    jun23: String,
    jul23: String,
    ago23: String,
    sept23: String,
    CANCELACION: String,
    COBRADOPORBAPRO: String,
    REINTEGRADO: String,
    TOTAL: String,
    CUOTAPAGADAS: String,
    CUOTAPEND: String,
    OBSERVACION: String,

    // Agrega otros campos según tus necesidades
},{ collection: 'ResumenSima' });

const resuAdmSchemaSoc = new mongoose.Schema({
    APELLIDO_Y_NOMBRE: String,
    NumeroDeDoc: String,
    IMPORTE: String,
    PLAN: String,
    INV: String,
    may20: String,
    jun20: String,
    jul20: String,
    ago20: String,
    sep20: String,
    oct20: String,
    nov20: String,
    dic20: String,
    ene21: String,
    feb21: String,
    mar21: String,
    abr21: String,
    may21: String,
    jun21: String,
    jul21: String,
    ago21: String,
    sep21: String,
    oct21: String,
    nov21: String,
    dic21: String,
    ene22: String,
    feb22: String,
    mar22: String,
    abr22: String,
    may22: String,
    jun22: String,
    jul22: String,
    ago22: String,
    sep22: String,
    oct22: String,
    nov22: String,
    dic22: String,
    ene23: String,
    feb23: String,
    mar23: String,
    abr23: String,
    may23: String,
    jun23: String,
    jul23: String,
    ago23: String,
    sept23: String,
    CANCELACION: String,
    COBRADOPORBAPRO: String,
    REINTEGRADO: String,
    TOTAL: String,
    CUOTAPAGADAS: String,
    CUOTAPEND: String,
    OBSERVACION: String,

    // Agrega otros campos según tus necesidades
},{ collection: 'ResumenAdm' });


const SimaSchemaPres = new mongoose.Schema({
    NumeroDeDoc: String,
    Nprest: String,
    CapOtorgado: String,
    CantCuot: String,
    CuotPend: String,
    ImpTot: String,
    FormCobro: String,
    UltCob: String,
    UltRec: String,
    Observac: String,
    Inv: String,
    
    
    // Agrega otros campos según tus necesidades
},{ collection: 'SimaPres' });

const AdmSchemaPres = new mongoose.Schema({
    NumeroDeDoc: String,
    Nprest: String,
    CapOtorgado: String,
    CantCuot: String,
    CuotPend: String,
    ImpTot: String,
    FormCobro: String,
    UltCob: String,
    UltRec: String,
    Observac: String,
    Inv: String,
    
    // Agrega otros campos según tus necesidades
},{ collection: 'AdmPres' });

const FacSchemaPres = new mongoose.Schema({
    NumeroDeDoc: String,
    Nprest: String,
    CapOtorgado: String,
    CantCuot: String,
    CuotPend: String,
    ImpTot: String,
    FormCobro: String,
    UltCob: String,
    UltRec: String,
    Observac: String,
    Inv: String,
    
    // Agrega otros campos según tus necesidades
},{ collection: 'FacPres' });

const AmupSchemaPres = new mongoose.Schema({
    NumeroDeDoc: String,
    Nprest: String,
    CapOtorgado: String,
    CantCuot: String,
    CuotPend: String,
    ImpTot: String,
    FormCobro: String,
    UltCob: String,
    UltRec: String,
    Observac: String,
    Inv: String,
    
    // Agrega otros campos según tus necesidades
},{ collection: 'AmupPres' });


const SimaSchemaCarg = new mongoose.Schema({
    NumeroDeDoc: String,
    Cargo: String,
    ImpCuot: String,
    FormCobro: String,
    Estado: String,
    Inversor: String,
    // Agrega otros campos según tus necesidades
},{ collection: 'SimaCarg' });

const AdmSchemaCarg = new mongoose.Schema({
    NumeroDeDoc: String,
    Cargo: String,
    ImpCuot: String,
    FormCobro: String,
    Estado: String,
    Inversor: String,
    // Agrega otros campos según tus necesidades
},{ collection: 'AdmCarg' });

const FacSchemaCarg = new mongoose.Schema({
    NumeroDeDoc: String,
    Cargo: String,
    ImpCuot: String,
    FormCobro: String,
    Estado: String,
    Inversor: String,  
    // Agrega otros campos según tus necesidades
},{ collection: 'FacCarg' });

const AmupSchemaCarg = new mongoose.Schema({
    NumeroDeDoc: String,
    Cargo: String,
    ImpCuot: String,
    FormCobro: String,
    Estado: String,
    Inversor: String,    
    // Agrega otros campos según tus necesidades
},{ collection: 'AmupCarg' });



module.exports = {
    AdmEvol: mongoose.model('AdmEvol', AdmSchemaEvol),
    AdmPrueba: mongoose.model('AdmPrueba', AdmPrueba),
    SimaEvol: mongoose.model('SimaEvol', SimaSchemaEvol),
    FacilitarEvol: mongoose.model('FacilitarEvol', FacilitarSchemaEvol),
    AmuprobaEvol: mongoose.model('AmuprobaEvol', AmuprobaSchemaEvol),
    AmuprobaSoc: mongoose.model('AmuprobaSoc', AmuprobaSchemaSoc),
    SimaSoc: mongoose.model('SimaSoc', SimaSchemaSoc),
    AdmSoc: mongoose.model('AdmSoc', AdmSchemaSoc),
    FacSoc: mongoose.model('FacSoc', FacSchemaSoc),
    ResumenSima: mongoose.model('ResumenSima', resuSimaSchemaSoc),
    ResumenAdm: mongoose.model('ResumenAdm', resuAdmSchemaSoc),
    SimaPres: mongoose.model('SimaPres', SimaSchemaPres),
    AdmPres: mongoose.model('AdmPres', AdmSchemaPres),
    FacPres: mongoose.model('FacPres', FacSchemaPres),
    AmupPres: mongoose.model('AmupPres', AmupSchemaPres),
    SimaCarg: mongoose.model('SimaCarg', SimaSchemaCarg),
    AdmCarg: mongoose.model('AdmCarg', AdmSchemaCarg),
    FacCarg: mongoose.model('FacCarg', FacSchemaCarg),
    AmupCarg: mongoose.model('AmupCarg', AmupSchemaCarg),
    Admins: mongoose.model('Admins', adminSchema),
  };

