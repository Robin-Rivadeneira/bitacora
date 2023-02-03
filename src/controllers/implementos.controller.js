const implemento = {}

const orm = require('../Database/dataBase.orm')
const sql = require('../Database/dataBase.sql')

implemento.showImplemeto = async(req, res) =>{
    const list = await sql.query('select * from Cars')
    res.render('general/autos/implementos/agregar', { list })
}

implemento.sendImplemeto = async(req, res)=>{
    const id = req.user.idUsers
    const {idCars, typeSecurityElemenstAndServis, nameSecurityElemenstAndServis, stateSecurityElemenstAndServis, observationSecurityElemenstAndServis} = req.body
    const newImplemento = {
        nameSecurityElemenstAndServis,
        typeSecurityElemenstAndServis,
        stateSecurityElemenstAndServis,
        observationSecurityElemenstAndServis,
        userIdUsers: id,
        CarIdCars: idCars
    }
    await orm.seguridadElementos.create(newImplemento)
    req.flash('success', 'Guardado')
    res.redirect('/cars/implementos/list/' + id);
}

implemento.listImplemeto = async(req, res) =>{
    const list = await sql.query('select * from Cars')
    const implementos = await sql.query('select * from securityelemenstandservis')
    res.render('general/autos/implementos/lista', { list, implementos })
}

implemento.detalleImplemeto = async(req, res) =>{
    const id = req.params.id
    const list = await sql.query('select * from Cars')
    const implementos = await sql.query('select * from securityelemenstandservis where idSecurityElemenstAndServis = ?', [id])
    res.render('general/autos/implementos/detalle', { list, implementos })
}

implemento.bringImplemeto = async(req, res) =>{
    const id = req.params.id
    const list = await sql.query('select * from Cars')
    const implementos = await sql.query('select * from securityelemenstandservis where idSecurityElemenstAndServis = ?', [id])
    res.render('general/autos/implementos/editar', { list, implementos })
}

module.exports = implemento