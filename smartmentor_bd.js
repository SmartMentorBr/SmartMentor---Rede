const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

//custom middleware
function requiresLogin(req, res, next) {
	if (req.session && req.session.userId) {
		return next();		
	} else {
		var err = new Error('You must be logged in to view this page.');
		err.status = 401;
		return next(err);
	}
}

router.get('/profile', mid.requiresLogin, function(req, res, next) {
	//...
}); 

//criaçao da Esquema do chat
const ChatSchema = new Schema({
	user_id: {
		type: Integer,
		unique: true,
		required: true
	},
	msg:{
		type: String,
		required: true
	},
	user: {
		type: String,
		required: false,
		trim: true,
		unique: true
	},
	dt_msg: {
		type: Date,
		required: false
	},
	vista_mentor: {
		type: String,
		required: false
	}
});

//criação do Schema de Eventos
const EventsSchema = new Schema({
	start: {
		type: Date,
		required: false
	},
	end: {
		type: Date,
		required: false
	},
	title: {
		type: String
	},
	id_user: {
		type: Integer
	}
});

//criação do Schema de Evenos relacionados
const EventsRelSchema = new Schema({
	id_user: {
		type: Integer,
		required: true,
		unique: true
	},
	event_id: {
		type: Integer,
		required: true,
		unique: true
	}
});

const UserValidationSchema = new Schema({
	knowledge_area: {
		type: String,
		required: true
	},
	knowledge_subarea: {
		type: String,
		required: false
	},
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	mentor_reference: {
		type: String,
		required: false
	},
	mentor_criteria: {
		type: String,
		required: false
	},
	ip_adress: {
		type: Integer,
		required: true
	},
	date_time: {
		type: Date,
		required: false
	},
	page: {
		type: String,
		required: false
	},
	page_referer: {
		type: String,
		required: false
	},
	user_agent: {
		type: String,
		required: false
	},
	remote_host: {
		type: String,
		required: false,
		unique: true
	},
	close_schedule: {
		type: Date,
		required: false
	},
	user_bio: {
		type: String,
		required: false
	},
	linkedin: {
		type: String,
		required: true,
		unique: true
	},
	site: {
		type: String,
		required: false
	},
	city: {
		type: String,
		required: true
	},
	age: {
		type: Integer,
		required: true
	},
	phone: {
		type: Integer,
		required: false
		unique: true,
		trim: true
	},
	cellphone: {
		type: Integer,
		required: false,
		unique: true,
		trim: true
	},
	project: {
		type: String,
		required: true,
		unique: true
	},
	segment: {
		type: String,
		required: true
		unique: false
	},
	status: {
		type: String,
		required: false
	}
});

db.user_validation.insert({
	name: "Wellington Cruz",
	email: "p.well@me.com",
	ip_adress: [177,33,54,129],
	date_time: new Date("2017-08-13T20:29:29Z"),
	page: "http://smartmentor.co/index.php?path=modulo_validacao/CadMentorado",
	page_referer: "http://smartmentor.co/modulo_validacao/biomentor/3",
	user_agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36",
	remote_host: "b1213681.virtua.com.br",
	city: "São Paulo",
	cellphone: 119928255176
});

//criação do Schema de notas
const RatingSchema = new Schema({
	comment: {
		type: String,
		required: true
	},
	rate: {
		type: Integer,
		required: true
	},
	user_id: {
		type: Integer,
		required: false
	},
	date: {
		type: Date,
		required: false
	}
})
