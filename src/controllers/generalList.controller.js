const generalList = {}
const path = require('path')

const orm = require('../Database/dataBase.orm')
const sql = require('../Database/dataBase.sql')

generalList.show = (req, res) => {
    res.render('general/eleccionLista');
}

generalList.showCars = async (req, res) => {
    const list = await sql.query('select * from Cars')
    res.render('general/autos/listCars', { list })
}

generalList.showCarsAdd = async (req, res) => {
    const maxId = await sql.query('select max(idCars) as maximo from Cars')
    res.render('general/autos/addCars', { maxId })
}
generalList.sendCarsadd = async (req, res) => {
    const id = req.user.idUsers
    const { idCarro, licenseplateCars, brandCars, YearsExpirationLicensePlateCars, modelCars, yearsLicenseplateCars, classCars, colourCars, chassisCars, engineCars, yearsCars } = req.body
    const newSend = {
        licenseplateCars,
        brandCars,
        modelCars, 
        YearsExpirationLicensePlateCars,
        yearsLicenseplateCars,
        classCars,
        colourCars,
        chassisCars,
        engineCars,
        yearsCars,
        userIdUsers: id
    }
    await orm.cars.create(newSend)

    const imagenUsuario = req.files.imageCars;
    const validacion = path.extname(imagenUsuario.name);
    const extencion = [".PNG", ".JPG", ".JPEG", ".GIF", ".TIF", ".png", ".jpg", ".jpeg", ".gif", ".tif"];

    if (!extencion.includes(validacion)) {
        req.flash("success", "Imagen no compatible.");
    }

    if (!req.files) {
        req.flash("success", "Imagen no insertada.");
    }

    const ubicacion = __dirname + "/../public/img/cars/" + imagenUsuario.name;

    imagenUsuario.mv(ubicacion, function (err) {
        if (err) {
            return req.flash("message", err);
        }
        sql.query("UPDATE Cars SET imageCars = ? WHERE idCars = ?", [
            imagenUsuario.name,
            idCarro,
        ]);
        console.log("Imagen de usuario ingresada");
    });
    res.redirect('/cars/list/' + id);
}

generalList.bringCars = async (req, res) => {
    const id = req.params.id
    const list = await sql.query('select * from Cars where idCars = ?', [id])
    res.render('general/autos/editCars', { list })
}

generalList.updateCars = async (req, res) => {
    const id = req.user.idUsers
    const { idCarro, licenseplateCars, brandCars, YearsExpirationLicensePlateCars, modelCars, yearsLicenseplateCars, classCars, colourCars, chassisCars, engineCars, yearsCars } = req.body
    const newSend = {
        licenseplateCars,
        brandCars,
        modelCars, 
        YearsExpirationLicensePlateCars,
        yearsLicenseplateCars,
        classCars,
        colourCars,
        chassisCars,
        engineCars,
        yearsCars,
        userIdUsers: id
    }
    await orm.cars.findOne({ where: { idCars: idCarro } })
        .then((actualizar) => {
            actualizar.update(newSend)
        })

    const imagenUsuario = req.files.imageCars;
    const validacion = path.extname(imagenUsuario.name);
    const extencion = [".PNG", ".JPG", ".JPEG", ".GIF", ".TIF", ".png", ".jpg", ".jpeg", ".gif", ".tif"];

    if (!extencion.includes(validacion)) {
        req.flash("success", "Imagen no compatible.");
    }

    if (!req.files) {
        req.flash("success", "Imagen no insertada.");
    }

    const ubicacion = __dirname + "/../public/img/cars/" + imagenUsuario.name;

    imagenUsuario.mv(ubicacion, function (err) {
        if (err) {
            return req.flash("message", err);
        }
        sql.query("UPDATE Cars SET imageCars = ? WHERE idCars = ?", [
            imagenUsuario.name,
            idCarro,
        ]);
        console.log("Imagen de usuario ingresada");
    });
    res.redirect('/cars/list/' + id);
}

module.exports = generalList