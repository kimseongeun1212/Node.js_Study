const {odd, even }=require('./javascript04-1_study');
const checkNumber=require('./bunc');
const { checkOddEven } = require('./bunc');

function checkStringOddEven(str){
    if(str.length % 2){
        return odd;
    }else{
        return even;
    }
}

console.log(checkOddEven(10));
console.log(checkStringOddEven('hello'));

//여기서 다 쓸 수 있음.
//객체 선언이 필요없음 코드 중복이 없음

//브라우저에서는 모듈을 크게는 require 대신 import를 쓰고, module.exports 대신 export default로 씀.
//import ~ from './~~';
//export defalt checkOddEven;


//3.4 노드 내장 객체 알아보기
//global
//노드의 전역개체: 브라우저의  window 같은 역할 / 모든 파일에서 접근 가능
//global, global.this
//require나 console log도 global.require 혹은  global.console.log인것. 원래는.

//console
//console.log .dir .time .timeEnd 등등 쓸 수 있다.  

//타이머 메서드
//setTimeout(()=> console.log('hi), 2000); //2초뒤에 hi를 출력해라
//setIntervald(함수, 밀리초) 중간에 중단 시킬 수 있는 객체
//setimediate():즉시 수행하는 객체
//node timer를 치는 순간 이 순서대로 수행됨.
//0     imediate    즉시실행
//1     interval    1초실행
//1.5   timeout     1.5초마다 실행
//2     interval    1초마다 실행

//__filename, __dirname
//>> __filename : 현재 파일 경로
//>> __dirname: 현재 폴더(디렉터리)경로
