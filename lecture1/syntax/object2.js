//array, Object는 모두 서로 연관된 값을 담는 것

//함수는 값이 될 수 있음 => 배열이나 객체에 담을 수 있음
var f = function f1(){
  console.log(1+1);
  console.log(1+2);
}
var a = [f];
a[0]();

var o = {
  func:f
}
o.func();

//조건문은 구문이지 값이 아니기 때문에 아래의 코드들 실행x
/*
var i = if(true){console.log(1)};
var w = while(true){console.log(1)};
*/
