//폴더처럼 변수, 함수를 정리함
//함수는 값이고 객체는 값을 담는 그릇이라는 점을 이용해 아래의 코드처럼 그룹핑가능
var o = {
  v1:'v1',
  v2:'v2',
  f1:function (){
    //this를 이용해 함수가 속해있는 객체를 참조할 수 있음
    console.log(this.v1);
  },
  f2:function (){
    console.log(this.v2);
  }
}

o.f1();
o.f2();
