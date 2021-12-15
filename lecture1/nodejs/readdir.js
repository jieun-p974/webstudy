var testFolder = './data';
var fs = require('fs');

//readdir : 특정 파일의 목록을 배열로 가져옴
fs.readdir(testFolder, function(error, fileList) {
  console.log(fileList);
});
