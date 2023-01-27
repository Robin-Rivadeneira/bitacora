const registerCtl = {};
const passport = require("passport");

const orm = require("../Database/dataBase.orm");
const sql = require("../Database/dataBase.sql");
const CryptoJS = require("crypto-js");

registerCtl.show = async (req, res) => {
	const usuario = await sql.query(
		"select max(idClient) AS maximo from clients"
	);
	const listGener = await sql.query("select * from geners");
	const listTypePerson = await sql.query("select * from typePersons");
	res.render("login/register", { listGener, listTypePerson, usuario });
};

registerCtl.register = passport.authenticate("local.signup", {
	successRedirect: "/logout",
	failureRedirect: "/register",
	failureFlash: true,
});

registerCtl.showLogin = (req, res) => {
	res.render("login/login");
};

registerCtl.login = passport.authenticate("local.signin", {
	successRedirect: "/events/list/",
	failureRedirect: "/login",
	failureFlash: true,
});

registerCtl.showUpdatePassword = (req, res) => {
	res.render("login/recovery");
};

registerCtl.showProfile = async (req, res) => {
	const id = req.user.idClient;
	const Eventos = await sql.query('select * from eventos where clientIdClient = ? ORDER BY nameEvent ASC', [id]);
	const Favoritos = await sql.query('select e.*, d.* from eventos e join eventDetails d on d.eventIdEvent = e.idEvent where d.favouriteEventDetail= "favorito" and d.clientIdClient = ? ORDER BY nameEvent ASC',[id]);
	const list = await sql.query("select * from datosCompletos where idClient = ?", [id]);
	const nombre = await CryptoJS.AES.decrypt(list[0].nameClient, "secret");
	list[0].nameClient = nombre.toString(CryptoJS.enc.Utf8);
	const apellido = await CryptoJS.AES.decrypt(list[0].lastNameClient, "secret");
	list[0].lastNameClient = apellido.toString(CryptoJS.enc.Utf8);
	const email = await CryptoJS.AES.decrypt(list[0].emailClient, "secret");
	list[0].emailClient = email.toString(CryptoJS.enc.Utf8);
	const celular = await CryptoJS.AES.decrypt(list[0].phoneClient, "secret");
	list[0].phoneClient = celular.toString(CryptoJS.enc.Utf8);
	const tipo = await CryptoJS.AES.decrypt(list[0].identificationCardClient, "secret");
	list[0].identificationCardClient = tipo.toString(CryptoJS.enc.Utf8);
	res.render("login/perfil", { list, Eventos, Favoritos });
};

registerCtl.updatePassword = async (req, res) => {
	const { usernameClient, passwordClient } = req.body;
	await orm.client
		.findOne({ where: { usernameClient: usernameClient } })
		.then((updatePassword) => {
			updatePassword.update(passwordClient);
			req.flash("message", "Se actualizo la contraseña");
			res.redirect("/");
		});
};

registerCtl.logout = (req, res, next) => {
	req.logout(function (err) {
		if (err) {
			return next(err);
		}
		req.flash("success", "Cerrada la Sesión con éxito.");
		res.redirect("/");
	});
};

module.exports = registerCtl;
