/*function a(){
  console.log('A');
}*/

//익명함수 : 함수명이 없는 함수
var a = function() {
  console.log('A');
}

function slowfunc(callback) {
  callback();
}

slowfunc(a);
