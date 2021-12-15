//js에 내장된 함수 round:반올림해줌
console.log(Math.round(1.6));//2
console.log(Math.round(1.4));//1

function sum(first,second) {//parameter(매개변수)
  console.log('a');
  return first+second;//return을 만나면 즉시 함수는 종료
  console.log('b');//return에서 함수가 종료되기때문서 출력안됨
}
console.log(sum(2,4));//argument(인자)
