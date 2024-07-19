// router.js

var express = require('express');
var router = express.Router();
var User = require('../models/user');

// GET rota para ler os dados
router.get('/', function (req, res, next) {
	return res.SendFile(path.join(__dirname + '/templateLogReg/index.html')); //tem que mudar aqui
});

// POST rota para atualizar os dados
router.post('/', function (req, res, next) {
	//confirma se usuário digitou a senha duas vezes
	if (req.body.password !== req.body.passwordConf) {
		var err = new Error('A senhas precisam ser iguais.');
		err.status = 400;
		res.send("a senha não corresponde");
		return next(err);
	}

	//inserir dados no mongo
	if (req.body.email && 
	req.body.username && 
	req.body.password && 
	req.body.passwordConf) {

		var userData = {
			email: req.body.mail,
			username: req.body.usernamem
			password: req.body.password,
			passwordConf: req.body.passwordConf,
		}	

		//usar schema.create para inserir dados no bd
		User.create(userData, function (error, user){
			if (error) {
				return next(error)
			} else {
				return res.redirect('/profile');
			}
		});
	} else if (req.body.logemail && req.body.logpassword) {
			User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
				if (error || !user) {
					var err = new Error('Wrong email or password.');
					err.status = 401;
					return next(err);
				} else {
					req.session.userId = user._id;
					return res.redirect('/profile');		
				}
		});
	} else {
		var err = new Error('Todos os campos são necessários.');
		err.status = 400;
		return next(err);
	}
})

// GET rota para depois do registro
router.get('/profile', function (req, res, next) {
	User.findById(req.session.userId).exec(function(error, user) {
		if (error) {
			return next(error);
		} else {
			if (user == null) {
				var err = new Error('Não autorizado! Volte para a tela anterior!');
				err.status = 400;
				return next(err);
			} else {
				return res.send('<h1>Nome: </h1>' + user.username + '<h2>Email: </h2>' + user.email + '<br><a type="button" href="/logout">Sair</a>')
			}
		}
	});
});

// GET /logout
router.get('/logout', function(req, res, next){
	if (req.session) {
		// delete session object
		req.session.destroy(function(err){
			if (err) {
				return next(err);
			} else {
				return res.redirect('/')
			}
		});
	}
});

module.exports = router;