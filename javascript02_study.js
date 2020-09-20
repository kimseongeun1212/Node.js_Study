//호출 스택
//anonymous은 가사의 전역 컨텍스트(항상 있다고 생각하는게 좋음)
//계속 쌓이고 역순으로 실행된다는 것.
//함수 실행이 완료되면 스택에서 빠짐
//LIFO구조라서 스택이라고 불림

function first(){
    second();
    console.log('첫 번째');
}

function second(){
    third();
    console.log('두 번째');
}

function third(){
    console.log('세 번째');
}
first();

function run(){
    console.log('3초후 실행');
}
console.log('시작');
setTimeout(run, 3000);
console.log('끝');

//예제 
function oneMore(){ //원모어라는 함수 선언
    console.log('one more');
}
function run(){ //런이라는 함수 선언
    console.log('run run');
    setTimeout(()=>{
        console.log('wow');
    },0)
    new Promise((resolve) => {
        resolve('hi');
    })
    .then(console.log);
    oneMore();
}

setTimeout(run,5000); //여기서 실행

//ㅡㅡㅡㅡㅡㅡㅡ코드가 돌아가는 원리(이벤트 루프)ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//일단 파일을 실행시키면 anonymous가 호출 스택에 깔리고 
//그 위에 setTimeout 실행시킨게 쌓임
//그럼 백그라운드에 타이머(run,5초)가 남음
//파일을 다 실행한것이므로 anonymous가 끝나서 호출 스택에서 사라짐.
//타이머 5초 후에
//run함수가 테스크 큐로 이동하게 되고 그 이후에 호출스택으로 이동됨(호출스택이 비어있어야 이동이 가능함.)
//스택에 run함수 호출되고 runrun이 콘솔에 실행 된다.
//실행끝나면 호출 스택이 run위에 set Timeout(익명, 0초)가 실행됨(0초라고 바로 실행 되지는 않음.)
//이 셋타임아웃이 또 백그라운드로 이동되고 
//new promise가 호출스택으로 호출됨.
//그러고 promise는 네부까지는 동기이므로 호출 스택에 resolve까지 쌓이게 됨,
//promise는 then을 만나는순간 비동기가 되므로 백그라운드에 타이머(익명, 0) 아래에 then console.log(hi)가 실행이되는 것.
//그러면 호출스택에 new promise, resolve 실행이 됐기에 사라지고 oneMore가 들어옴.
//그럼 원모어 안에 있던 콘솔 로그가 실행이 됨 실행됐으므로 사라짐 그러고 run도 실행이 끝나게 되므로 나가사라짐.
//실질적으로 콘솔창에는 다 표시된 상황이지만 background에 아직 남아있는 아이들
//익명함수가 테스크큐로 이동 되고 그 다음꺼가 들어감. 
//그래서 익명함수 후에 익명함수가 실행되겠지만 promise가 익명보다 더빨리 새치기해서 호출됨.
//결론적으로 promise함수였던 hi 가 출력되고 그 다음 wow가 출력됨.
//결과는 runrun -> one more ->  hi -> wow
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

//여기서!! TIP!
//Promise.then/catch
//Process.nextTick
//이 아이들은 익명함수가 있어도 새치기해서 먼저 들어간다. 그래서 먼저 호출되어 먼저 출려된다.
//++++백그라운드는 C++로 되어있어서 멀티스레드가 가능한 것, 호출 스택이 자바스크립트를 전제하여 얘는 싱글스레드.