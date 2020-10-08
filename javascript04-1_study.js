//REPL
//read valuate loop
//변수 선언에 대한 실행결과는 undefined이다.
//console.log도 undifined
//나가려면 ctrl+c 두
function helloworld(){
    console.log("Hello Woeld");
    hellonode();
}
function hellonode(){
    console.log("Hello Node");
}

helloworld();
// C:\Users\BLUE\Code\web_01\Nodestudy>node javascript04-1_study.js
// C:\Users\BLUE\Code\web_01\Nodestudy>node javascript04-1_study.js
// Hello Woeld
// Hello Node


//모듈
//노드는 자바스크립트 코드를 모듈로 만들 수 있음
// -모듈: 특정한 기능을 하는 함수나 변수들의 집합
// -모듈로 만들면 여러프로그램에서 재사용 가능
//코드가 길다싶으면 잘게잘게 쪼개서 관리하기 쉽게 하기 위한 기능

const odd= '홀수입니다.';
const even='짝수입니다.';

module.exports={
    odd,
    even,
};
//module.exports = [odd, even]; 이렇게도 사용가능

const os= require('os');
//os라는 모듈을 편하게 가져올 수 있는 거임
os.uptime();
//process랑 어느정도 겹침
console.log(os.hostname); //내 컴퓨터 네임을 알 수 있고
console.log(os.cpus()); //쿨럭도 알 수 있고 코어가 몇개있고에 대한 cpu정보를 알 수 있음
// os.arch():process.arch와 동일합니다
// os.platform():process.platform과 동일합니다
// os.type():운영체제의 종류를 보여줍니다.
// os.uptime():운영체제 부팅 이후 흐른 시간(초)를 보여줍니다.
// 참고로 process.uptime()은 노드의 실행시간이었습니다.
// os.release(): 운영체제의 버전을 보여줍니다.
// os.homedir():  홈디렉터리 경로를 보여줍니다
// os.tmpdir(): 임시파일 저장경로를 보여줍니다
// os.freemem():사용가능한 메모리를 보여줍니다
// os.totalmem():전체 메모리 용량을 보여줍니다.

//노드 사이트 안에 어떤 API를 쓸 수 있는지 다 나와있음


//path
const path=require('path');
// C:\users\seongeun --> 윈도우 경로 표기
// /user/seongeun --> mac경로 표기

path.join(__dirname, 'var.js');
path.resolve(__dirname,'..','/var.js'); //절대 경로 가장 최상위 폴더이름을 알려ㅜㅁ
//맥이든 윈도우 별로 경로 표기를 해주는 기능임.
//맥이랑 리눅스를 합쳐서 POSIX라고 함
// path.extname-->확장자 추출
// path.dirname-->폴더 이름을 추출
//path의 장점은 막무가내로 복잡하게 /, \ 이게 쓰이는 것을 쉽게 볼수있고 경로 표기가 가능하다.


//url모듈
//인터넷 주소를 쉽게 조작할 수 있도록 도와주는 모듈
//노드 사이트에서 url 표가 있는데 그 표에서 윗부분이 노드에서 부르는 것 아래가 whatwg에서 부르는 명칭임-->참고하면 좋음
//쿼리스트링: 주소에다가 데이터를 담는 방법
const {URL}=require('url');
const myURL=new URL('http://www.naver.com');
console.log('searchParams:', myURL.searchParams);
console.log('searchParams.getAll():', myURL.searchParams.getAll('category'));
console.log('searchParams.get()', myURL.searchParams.get('limit'));

console.log('searchParams.keys():', myURL.searchParams.keys());
console.log('searchParams.values():', myURL.searchParams.values());

myURL.searchParams.append('filter','es3');
myURL.searchParams.append('filter','es5');
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.set('filter','es6');
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.delete('filter');
console.log('searchParams.toString():', myURL.searchParams.toString());
myURL.search=myURL.searchParams.toString();

// 쿼리스트링
// 기존노드방식에서는 url querystring을 querystring모듈로 처리
// querystring.parse(쿼리):url의 query 부분을 자바스크립트 객체로 분해해줍니다.
// querystring.stringify(객체):분해된 query객체를 문자열로 다시 조합해줌
