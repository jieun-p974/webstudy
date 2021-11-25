var number = [1,400,12,34,5];
var i = 0;
var total = 0;
// i < 5보다는 동적으로 배열.length넣으면 좋음
while (i < number.length) {
  total = total + number[i];
  i = i + 1;
}
console.log(`total : ${total}`);
