//DB 접속 정보
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'nodejs',
  password : '11223344',
  database : 'study'
});
connection.connect();

module.exports = connection;
