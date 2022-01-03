var express = require('express');
//express가 가지고 있는 Router라는 메소드를 불러옴
var router = express.Router();
var path = require('path');
var fs = require('fs');
var sanitizeHtml = require('sanitize-html');
var template = require('../lib/template.js');

// 정보를 코드에 보이게 적으면 X, 추후에 따로 방법 모색
var authData = {
  email:'egoing777@gamil.com',
  password:'1234',
  nickname:'egoing'
}

router.get('/login', function(request, response){
  var title = 'WEB - login';
  var list = template.list(request.list);
  var html = template.HTML(title, list, `
    <form action="/auth/login_process" method="post">
      <p><input type="text" name="email" placeholder="email"></p>
      <p><input type="password" name="pwd" placeholder="password"></p>
      <p>
        <input type="submit" value="login">
      </p>
    </form>
  `, '');
  response.send(html);
});

router.post('/login_process', function(request, response){
  var post = request.body;
  var email = post.email;
  var password = post.pwd;
  if(email === authData.email && password === authData.password){
    // success code;
    request.session.is_logined = true;
    request.session.nickname = authData.nickname;
    response.session.save(function(){
      response.redirect(`/`);
    });
  } else {
    response.send('Who?')
  }
  //response.redirect(`/topic/${title}`);
});
router.get('/logout', function (request, response) {
  request.session.destroy(function(err){
    response.redirect('/');
  });
});

module.exports = router;
