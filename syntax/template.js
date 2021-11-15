var name = 'K8805'
//기존 방법으로 변수 추가하고 줄바꿈 추가하는 방
var letter = 'Dear '+name+'\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, '+name+'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, '+name+'sunt in culpa qui officia deserunt mollit anim id est laborum.'

//최근 방법으로 변수 추가하고 줄바꿈 추가하는 방법 ''대신에 ``로 문자를 묶어주고 변수는 ${}안에 입력
var letter = `Dear ${name}

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ${name} quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ${name} sunt in culpa qui officia deserunt mollit anim id est laborum.`

console.log(letter);
