require('dotenv').config();

var mysql = require('mysql');
var db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DATABASE,
});

db.connect(function (err) {
	if (err) throw err;
	console.log('Da ket noi database');
});

module.exports = db; //lệnh exports để xuất (public) ra cho bên ngoài module có thể dùng được db
