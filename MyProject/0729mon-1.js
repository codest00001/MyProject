//웹서버 만들기. 플레이누르고 창에 localhost:3000치면 헬로월드나옴//

const http = require('http'); //http 모듈가져오기. 노드 안에 들어있음. 쓰겠다고 선언하면 됨.

const server = http.createServer((req, res) => { //웹서버만들라는 메소드. 터미널에서 노드호출해서 test.js를 실행한 것과 같음. node test.js 노드를 이미 깔아놨으므로 사용가능.
    res.statusCode = 200; //리퀘스트.리스폰스.이벤트 방식으로 등록. http가 공장. server가 제품.
    res.setHeader('content-Type', 'text/plain'); //html넣으려면 text/html로 바꿔주고 helloworld에 html코드 넣으면 됨. doctype....이런것
    res.end('1213Hello, worlddd!\n');
});

console.log(server);

const port = 3000;
server.listen(port, () => { // listen 안해주면 서버는 존재하나 동작 안하게됨. 리슨에게 콜백.
    console.log(`Server running at http://localhost:${port}/`);
});

//이런걸로 언제 하나하나 찍어서 네이버 만드냐. 그래서 넥스트js, 미티어js등등의 프레임워크등장.
//편리한 세트. 골라서 쓰면 됨.