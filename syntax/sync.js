var fs = require('fs');

/*//readFileSync동기적인 방식
console.log('A');
var result = fs.readFileSync('syntax/sample.txt','utf8');
console.log(result);
console.log('C');*/

//비동기적인 방식
console.log('A');
fs.readFile('syntax/sample.txt','utf8', function(err, result){
  console.log(result);
});
console.log('C');
