const { odd, even } = require('./javascript04-1_study');
const value=require('./javascript04-1_study'); //./는 현재내가 있는 폴더
// const { odd, even }= ''
// console.log(value);

//이미 넘겨 받은 애들을 또 객체로 넘겨줄 수 있음.
function checkOddEven(number){
    if(number % 2){
        return odd;
    }else {
        return even;
    }
}

module.exports={
    checkOddEven,
    odd,
    even,
};
//주의!!! 파일에서 단 한번만 사용가능함
