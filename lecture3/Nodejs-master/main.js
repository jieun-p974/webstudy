//express도 모듈이기 때문에 모듈을 불러오는 require 사용
var express = require('express')
//express는 함수, 함수에서 return된 값은 app에 담김
var app = express()
var fs = require('fs');
//body-parser load
var bodyParser = require('body-parser');
//compression load
var compression = require('compression');
//보안, 안전하게 
var helmet = require('helmet');
app.use(helmet());
var indexRouter = require('./routes/index');
var topicRouter = require('./routes/topic');


//정적인 파일을 서비스하는 방법
//public디렉토리에서 사진을 찾음
app.use(express.static('public'));
//form data 처리하는 미들웨어 표현식
//사용자가 요청할때마다 미들웨어 실행됨
app.use(bodyParser.urlencoded({ extended:false }));
//json 사용할 경우
// app.use(bodyParser.json())

//compression사용
app.use(compression());

//middleware생성_반복되는 코드를 미들웨어로
app.use('*',function(request, response, next){
  fs.readdir('./data', function(error, filelist){
    request.list = filelist;
    next();
  });
});

app.use('/', indexRouter);
//'/topic'으로 시작하는 주소에 topicRouter라는 미들웨어를 적용하겠다는 뜻
app.use('/topic', topicRouter);

//미들웨어는 순차적으로 실행되기 때문에
//위 코드들을 거치면서 찾을 수 없을 때 아래의 코드가 실행됨
//404error 처리 코드
app.use(function(req, res){
  res.status(404).send('Sorry cant find that!');
});

//에러처리
app.use(function(err, req, res, next){
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))


/*
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
      if(queryData.id === undefined){

      } else {
      }
    } else if(pathname === '/create'){

    } else if(pathname === '/create_process'){

    } else if(pathname === '/update'){

    } else if(pathname === '/update_process'){

    } else if(pathname === '/delete_process'){

    } else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);
*/
