//배열 : 값이 순서대로
var members = ['egoing', 'k8805', 'hoya'];
console.log(members[1]);

var i = 0;
while (i < members.length) {
  console.log('array loop', members[i]);
  i = i + 1;
}
//객체 : 각각의 고유한 이름을 정해줌
var roles = {
  'programmer':'egoing',
  'designer':'k8805',
  'manager':'hoya'
}
console.log(roles.designer);//k8805
console.log(roles['designer']);//k8805

for(var name in roles){
  //name 변수는 객체의 식별자(key)가 들어감
  //key의 value를 가져오기 위해서는 객체명[key]라고 입력
  console.log('object => ', roles[name]);
}
