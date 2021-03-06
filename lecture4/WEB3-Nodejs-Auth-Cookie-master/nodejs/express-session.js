var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')
var FileStore = require('session-file-store')(session);

var app = express()

// secret은 required option
// session 미들웨어가 내부적으로 조용히 실행함
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: new FileStore()
}))

app.get('/', function (req, res, next) {
  console.log(req.session);
  if(req.session.num === undefined){
    req.session.num = 1;
  } else {
    req.session.num = req.session.num + 1;
  }
  res.send(`Views : ${req.session.num}`);
})

app.listen(3000, function(){
  console.log('Example app listening on port 3000!')
})
