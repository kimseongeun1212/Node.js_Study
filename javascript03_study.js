//화살표 함수

function add1(x,y){
    return x+y;
}
//function 이 부분을 화살표 함수로 바꿈.
const add2=(x,y)=>{
    return x+y;
};
const add3=(x,y)=>x+y;
const add4=(x,y) => (x+y);
//위에 세개 함수 다 같은 함수임.
// '' 
function not1(x){
    return !x;
}
const not2=x=>!x;

//객체를 리턴하는 경우에는 소괄호가 필수다.
//ex)
const obj=(x,y)=>({x,y});

//function은  자기만의 this를 갖기 때문에 that같은 변수에 넣어준다.
//하지만 화살표 함수는 무조건 부모의 this를 갖기에 다르다.
//따라서 function을 화살표 함수가 대체하는 것은 아니다.
button.addEventListener('click', function() {
    console.log(this.textContent);
});
//이 함수는 자기만의 this이므로 버튼에 적혀있는 텍스트를 출력할 수 있음.
//하지만
button.addEventListener('click', () => {
    console.log(this.textContent);
});
//이렇게 하면 작동을 안함 따라서
button.addEventListener('click', (e) => {
    console.log(e.target.textContent);
});
//이렇게 써야 작동이 됨.


//비구조화 할당
//구조분해
const example={a:123, b:{c:135, d:146}}
const a=example.a;
const d=example.b.d;

const {a,b:{d}}=example;
console.log(a); //123
console.log(d); //146

arr=[1,2,3,4,5];
const x=arr[o];
const y=arr[1];
const z=arr[4];

const [x,y,,,z]=arr;
// this 사용하고 있을 때 구조 분해 하면 안됨.



