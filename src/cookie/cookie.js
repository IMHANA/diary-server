import { createServer } from 'http';
// eslint-disable-next-line @typescript-eslint/no-var-requires
let http = require('http');
// eslint-disable-next-line @typescript-eslint/no-var-requires
let cookie = require('cookie');
createServer(function (request, response) {
  console.log('이게대체뭔데', request.headers.cookie);
  console.log(request.headers.cookie);
  response.writeHead(200, {
    'Set-Cookie': ['yummy_cookie=choco', 'tasty_cookoe=strawberry'],
  });
  response.end('Cookie!!');
}).listen(3000);
