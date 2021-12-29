var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');
var cookie = require('cookie');

function authIsOwner(request, response) {
  var isOwner =false;
  var cookies = {};
  if (request.headers.cookie){
    var cookies = cookie.parse(request.headers.cookie);
  }
  if(cookies.email === 'egoing777@gamil.com' && cookies.password === '1234'){
    isOwner = true;
  }
  return isOwner;
}
function authStatusUI(request, response){
  var authStatusUI = '<a href="/login">login</a>';
  if (authIsOwner(request,response)){
    authStatusUI = '<a href="/logout_process">logout</a>'
  }
  return authStatusUI;
}

router.get('/', function(request, response) {
  var title = 'Welcome';
  var description = 'Hello, Node.js';
  var list = template.list(request.list);
  var html = template.HTML(title, list,
    `
    <h2>${title}</h2>${description}
    <img src="/images/hello.jpg" style="width:300px; display:block; margin-top:10px;">
    `,
    `<a href="/topic/create">create</a>`,
    authStatusUI(request,response)
  );
  response.send(html);
});
router.get('/login', function(request, response){
  var title = 'Login';
  var list = template.list(request.list);
  var html = template.HTML(title, list, `
    <form action="login_process" method="post">
      <p><input type="text" name="email" placeholder="email"></p>
      <p><input type="password" name="password" placeholder="password"></p>
      <p><input type="submit"></p>
    </form>
    `,
    `<a href="/topic/create">create</a>`, '');
  response.send(html);
});

router.post('/login_process', function(request, response){
    var post = request.body;
    if(post.email === 'egoing777@gamil.com' && post.password === '1234'){
      response.writeHead(302,{
        'Set-Cookie':[
          `email=${post.email}`,
          `password=${post.password}`,
          `nickname=egoing`
        ],
        Location:'/'
      });
      response.end();
    }else{
      response.end('Who?');
    }
});
router.post('/logout_process', function(request, response){
    var post = request.body;
      response.writeHead(302,{
        'Set-Cookie':[
          `email=; Max-Age=0`,
          `password=; Max-Age=0`,
          `nickname=; Max-Age=0`
        ],
        Location:'/'
      });
      response.end();
});

module.exports = router;
