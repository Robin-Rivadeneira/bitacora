const index = {}
const sql = require("../dataBase/dataBase.sql");
const orm = require("../dataBase/dataBase.orm");

const CryptoJS = require("crypto-js");

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
						res.flash("success", "no tiene un usuario con esa cuenta porfavor registrese");
						res.redirect("/Registro");
					}
				} else {
					res.redirect("/Registro");
				}
			}
		}
	} else {
		res.redirect("/Registro");
	}
}