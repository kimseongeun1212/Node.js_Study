//let과 const의 가장 큰 차이점은 블록 스코프이다.const의if

if(true){
    var x=3;
}
console.log(x); //3

if(true){
    const y=3;
}
console.log(y);
// 함수 스코프(function() {}이 스코프의 기준점)
//다른 언어와는 달리 if나 for,while은 영향을 미치지못함.
// const와 let은 함수 및 블록({})에도 별도의 스코프를 가짐.

//const는 한번만 초기화 시킬수있다, 한번만 대입 시킬수있따.
//const로 선언한 변수는 딱 한번만 = 을 쓸 수 있다.
//let은 그냥 자료형임. 편하게.


//탬플릿은 그냥 편의 기능
var won=1000;
var result='이 과자는 ' + won + '원입니다.';
//위에꺼는 너무 쓰기 불편함.
const result=`이 과자는 ${won}원입니다.`
//그래서 추가 된 문법

//객체 리터럴
//▼▼▼▼구버전▼▼▼▼
var sayNode=function(){
    console.log('Node');
};
var es='ES';
var oldObject={
    sayJS:function(){
        console.log('JS');
    },
    sayNode: sayNode,
};
oldObject[es+6]="Fantastic"; //동적 속성
oldObject.sayNode(); //Node
oldObject.sayJS(); //JS
console.log(oldObject.ES6); //Fantastic

//▼▼▼최근▼▼▼
const newObject={
    sayJS(){
        console.log('JS');
    },
    sayNode,
    [es+6]:'Fantastic', //아예 객체안에 동적 속성을 넣어줌.
};
newObject.sayNode(); //Node
newObject.sayJS(); //JS
console.log(newObject.ES6); //Fantastic