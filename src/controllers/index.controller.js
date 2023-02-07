const index = {}
const sql = require("../dataBase/dataBase.sql");
const orm = require("../dataBase/dataBase.orm");

const CryptoJS = require("crypto-js");
const { create } = require("express-handlebars");

index.show = (req, res) => {
	res.render('index');
}

index.send = async (req, res) => {
	const { validar } = req.body;
	const a = await sql.query('select * from users')
	if (a.length > 0) {
		for (let i = 0; i < a.length; i++) {
			const des = await CryptoJS.AES.decrypt(a[i].usernameUser, 'secret');
			const usuarios = des.toString(CryptoJS.enc.Utf8);
			if (usuarios.toString() == validar) {
				const validacion = await orm.user.findOne({ where: { usernameUser: a[i].usernameUser } });
				if (validacion) {
					const validaciones = validacion;
					if (validaciones.usernameUser !== null) {
						res.redirect("/Login/" + validaciones.idUsers);
					} else {
						req.flash("message", "no tpuede ingresar");
					}
				} else {
					res.redirect("/register");
				}
			}else{
				req.flash("message", "no tpuede ingresar");
				res.redirect('/')
			}
		}
	} else {
		await sql.query('CREATE VIEW implementos AS SELECT c.*,e.idSecurityElemenstAndServis, e.nameSecurityElemenstAndServis, e.typeSecurityElemenstAndServis, e.stateSecurityElemenstAndServis,e.observationSecurityElemenstAndServis FROM cars c JOIN securityelemenstandservis e ON e.CarIdCars = c.idCars')
		await sql.query('CREATE VIEW matriculas AS SELECT l.idlicensePlate,l.datelicensePlates,l.registrationYearLicensePlates,l.registrationExpirationDateLicensePlates,l.toNameLicensePlates, t.* FROM licensePlates l JOIN tuitiontaxes t ON t.licensePlateIdlicensePlate =l.idlicensePlate')
		await sql.query('CREATE VIEW ordenTrabajo AS SELECT c.*, o.*, v.* from cars c JOIN orderworks o ON o.CarIdCars = c.idCars JOIN vendors v ON v.idVendor = o.vendorIdVendor')
		res.redirect("/register");
	}
}

module.exports = index