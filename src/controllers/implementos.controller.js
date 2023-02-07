const implemento = {}

const orm = require('../Database/dataBase.orm')
const sql = require('../Database/dataBase.sql')

implemento.showImplemeto = async (req, res) => {
    const list = await sql.query('select * from Cars')
    res.render('general/autos/implementos/agregar', { list })
}

implemento.sendImplemeto = async (req, res) => {
    const id = req.user.idUsers
    const { idCars, typeSecurityElemenstAndServis, dateSecurityElemenstAndServis, nameSecurityElemenstAndServis, stateSecurityElemenstAndServis, observationSecurityElemenstAndServis } = req.body
    const newImplemento = {
        nameSecurityElemenstAndServis,
        dateSecurityElemenstAndServis,
        typeSecurityElemenstAndServis,
        stateSecurityElemenstAndServis,
        observationSecurityElemenstAndServis,
        userIdUsers: id,
        CarIdCars: idCars
    }

    for (let i = 0; i < stateSecurityElemenstAndServis.length; i++) {
        await orm.seguridadElementos.create(newImplemento[i])
    }
    req.flash('success', 'Guardado')
    res.redirect('/cars/implementos/list/' + id);
}

implemento.listImplemeto = async (req, res) => {
    const implementos = await sql.query('select * from securityelemenstandservis')
    res.render('general/autos/implementos/lista', { implementos })
}

implemento.detalleImplemeto = async (req, res) => {
    const id = req.params.id
    const list = await sql.query('select * from Cars')
    const implementos = await sql.query('select * from securityelemenstandservis where idSecurityElemenstAndServis = ?', [id])
    res.render('general/autos/implementos/detalle', { list, implementos })
}

implemento.bringImplemeto = async (req, res) => {
    const id = req.params.id
    const list = await sql.query('select * from Cars')
    const implementos = await sql.query('select * from securityelemenstandservis where idSecurityElemenstAndServis = ?', [id])
    res.render('general/autos/implementos/editar', { list, implementos })
}

implemento.updateImplemeto = async (req, res) => {
    const id = req.user.idUsers
    const ids = req.params.id
    const { idCars, typeSecurityElemenstAndServis, dateSecurityElemenstAndServis, nameSecurityElemenstAndServis, stateSecurityElemenstAndServis, observationSecurityElemenstAndServis } = req.body
    const newImplemento = {
        nameSecurityElemenstAndServis,
        dateSecurityElemenstAndServis,
        typeSecurityElemenstAndServis,
        stateSecurityElemenstAndServis,
        observationSecurityElemenstAndServis
    }
    await orm.seguridadElementos.findOne({ where: { idSecurityElemenstAndServis: ids } })
        .then((acutalizar) => {
            for (let i = 0; i < stateSecurityElemenstAndServis.length; i++) {
            acutalizar.update(newImplemento[i])
            }
            req.flash('success', 'Guardado')
            res.redirect('/cars/implementos/list/' + id);
        })
}

module.exports = implemento