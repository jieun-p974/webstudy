var mysql      = require('mysql');
// 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 합니다.

//오류 발생해서 새 계정 만들고 grant로 권한 부여
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'nodejs',
  password : '11223344',
  database : 'study'
});

connection.connect();

connection.query('SELECT * FROM topic', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results);
});

connection.end();
