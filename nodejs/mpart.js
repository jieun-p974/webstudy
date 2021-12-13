var M = {
  v:'v',
  f:function(){
    console.log(this.v);
  }
}

//지금 만든 모듈인 Mpart.js의 기능들 중 M을 모듈 바깥에서 사용할 수 있도록 하는 코드
module.exports = M;
