var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

// Criação do Esquema para loging de usuário
var UserLoginSchema = new Schema({
	email: {
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	username: {
		type: String,
		unique: true,
		required: true
		trim: true
	},
	password: {
		type: String,
		required: true,
	},
	passwordConf: {
		type: String,
		required: true
	}
});

//autenticação do input em comparação com o db
UserLoginSchema.static.authenticate = function (email,password,callback) {
	User.findOne({email: email}).exec(function(err,user){
		if (err) {
			return callback(err)
		} else if (!user) {
			var err = new Error('Usuário não encontrado.');
			err.status = 401;
			return callback(err);
		}
		bcrypt.compare(password, user.password, function(err, result){
			if (result == true) {
				return callback(null, user);
			} else {
				return callback();
			}
		})
	});
}

//hashing(resumir) o password antes de salvar no banco
UserLoginSchema.pre('save', function(next) {
	var user = this;
	bcrypt.hash(user.password, 10, function(err,hash){
		if(err){
			return next(err);
		}
		user.password = hash;
		next();
	})
});

var UserLogin = mongoose.model('userlogin', UserLoginSchema);
module.exports = User;