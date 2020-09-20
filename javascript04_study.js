//클래스
//클래스는 사실 프로토타입이다.
//생성자 상속 등을 깔끔하게 처리 가능
//코드가 그룹화 되어 가독성 상승

//프로미스
//>> 콜백 헬이라고 불리는 지저분한 자바 그크립트 코드의 해결택
//프로미스: 내용이 실행은 되었지만 아직 결과를 반환하지 않은 객체
//Then을 붙이면 결과를 반환
//실행이 완료되지 않았으면 완료된 후에 Then 내부함수가 실행

//Resolve(성공리턴값) -> then으로 연결
//Reject(실패 리턴값) -> catch로 연결
//Finally 부분은 무조건 실행됨

const condition=true;
const promise=new Promise((resolve, reject)=>{
    //동기로 실행이 됨.
    if(condition){
        resolve('성공');
    }else{
        reject('실패');
    }
});
//이후 promise가 갖고 있다가
//다른 코드가 들어갈 수 있음.
promise
//여기서 then catch로 불러서 출력가능
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.error(error);
})

//콜백을 쓰면 불편하고 어려웠던게 프로미스를 쓰면 편리해짐.
//프로미스는 코드가 갈수록 들어갔다가 다시 나오지않고 일직선.

//Promise.all(배열): 여러개의 프로미스를 동시에 실행
//>>하나라도 실패하면 catch행
//>>allSettled로 실패한 것만 추려낼 수 있음.

//then, then, then...너무 많음
function findAndSaverUser(Users){
    Users.findOne({})
    .then((user)=>{
        user.name='zero';
        return user.save();
    })
    .then((user)=>{
        return Users.findOne({gender:'m'});
    })
    .then((user)=>{
        //생략....
    })
}
//async/await으로 한번 더 축약 가능
//이렇게
async function findAndSaverUser(Users){
    let user=await Users.findOne({}); //오른쪽에서 왼쪽으로
    user.name='zero';
    user=await user.save();
    user=await Users.findOne({gender:'m'});
}

//화살표 함수도 async/await 가능
const findAndSaverUser=async (Users) =>{
    try{
        let user =await Users.findOne({});
        //..
        //..
        //..
    }catch(error){
        console.error(error);
    } 
}

//for await
//resolve된 프로미스가 변수에 담겨 나옴
//await을 사용하기 때문에 async함수 안에서 해야함

const promise1=Promise.resolve('성공1');
const promise2=Promise.resolve('성공2');
(async =>{
    for await(promise of [promise1, promise2]){
        console.log(promise);
    }
})();