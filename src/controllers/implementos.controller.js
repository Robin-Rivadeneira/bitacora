const implemento = {}

const orm = require('../Database/dataBase.orm')
const sql = require('../Database/dataBase.sql')

implemento.showImplemeto = async (req, res) => {
    const list = await sql.query('select * from Cars')
    const maximo = await sql.query('select max(idSecurityElemenstAndServis) as maximo from securityelemenstandservis')
    res.render('general/autos/implementos/agregar', { list, maximo })
}

implemento.sendImplemeto = async (req, res) => {
    const id = req.user.idUsers
    const { idCars, idSeguridad, typeSecurityElemenstAndServisDetails, dateSecurityElemenstAndServis, nameSecurityElemenstAndServisDetails, stateSecurityElemenstAndServisDetails, observationSecurityElemenstAndServis } = req.body
    const newSegurity ={
        dateSecurityElemenstAndServis,
        observationSecurityElemenstAndServis,
        CarIdCars: idCars
    }
    await orm.seguridadElementos.create(newSegurity)
    for (let i = 0; i < stateSecurityElemenstAndServisDetails.length; i++) {
        await sql.query('INSERT INTO SecurityElemenstAndServisDetails ( nameSecurityElemenstAndServisDetails, typeSecurityElemenstAndServisDetails, stateSecurityElemenstAndServisDetails, userIdUsers, CarIdCars, SecurityElemenstAndServiIdSecurityElemenstAndServis) VALUES (?,?,?,?,?,?)', [ nameSecurityElemenstAndServisDetails[i], typeSecurityElemenstAndServisDetails, stateSecurityElemenstAndServisDetails[i], id, idCars, idSeguridad])
    }
    req.flash('success', 'Guardado')
    res.redirect('/cars/implementos/list/' + id);
}

implemento.detalleImplemeto = async (req, res) => {
    const id = req.params.id
    const cars = await sql.query('select DISTINCT idCars,licenseplateCars,modelCars,brandCars from implementos where idCars = ?', [id])
    const seguridad = await sql.query('select DISTINCT idSecurityElemenstAndServis,dateSecurityElemenstAndServis,observationSecurityElemenstAndServis from implementos where CarsIdCars = ?', [id])
    const detalle = await sql.query('select DISTINCT nameSecurityElemenstAndServisDetails,typeSecurityElemenstAndServisDetails,stateSecurityElemenstAndServisDetails from implementos where CarsIdCars = ?', [id])
    res.render('general/autos/implementos/detalle', {seguridad, cars, detalle })
}

implemento.bringImplemeto = async (req, res) => {
    const id = req.params.id
    const cars = await sql.query('select DISTINCT idCars,licenseplateCars,modelCars,brandCars from implementos where idCars = ?', [id])
    const seguridad = await sql.query('select DISTINCT idSecurityElemenstAndServis,dateSecurityElemenstAndServis,observationSecurityElemenstAndServis from implementos where CarsIdCars = ?', [id])
    const detalle = await sql.query('select DISTINCT nameSecurityElemenstAndServisDetails,typeSecurityElemenstAndServisDetails,stateSecurityElemenstAndServisDetails from implementos where CarsIdCars = ?', [id])
    res.render('general/autos/implementos/editar', {seguridad, cars, detalle })
}

implemento.updateImplemeto = async (req, res) => {
    const id = req.user.idUsers
    const ids = req.params.id
    const { idCars, typeSecurityElemenstAndServisDetails, dateSecurityElemenstAndServis, nameSecurityElemenstAndServisDetails, stateSecurityElemenstAndServisDetails, observationSecurityElemenstAndServis } = req.body
    for (let i = 0; i < stateSecurityElemenstAndServisDetails.length; i++) {
        await sql.query('UPDATE securityelemenstandservis SET dateSecurityElemenstAndServis = ?, nameSecurityElemenstAndServisDetails = ?, typeSecurityElemenstAndServisDetails = ?, stateSecurityElemenstAndServisDetails = ?, observationSecurityElemenstAndServis = ?', [dateSecurityElemenstAndServis, nameSecurityElemenstAndServisDetails[i], typeSecurityElemenstAndServisDetails, stateSecurityElemenstAndServisDetails[i], observationSecurityElemenstAndServis])
    }
    req.flash('success', 'Guardado')
    res.redirect('/cars/implementos/list/' + id);
}

module.exports = implemento