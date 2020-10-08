console.log(__filename); //파일 경로
console.log(__dirname); //현재 폴더(디렉토리) 경로

exports.odd=odd;
exports.even=even;
// module.exports={ odd, even };//위에 두문장과 같은 의미의 코드
// module.exports === exports === {odd,even}
//module.exports에 함수를 널고 싶거나 여러개를 넣으면 module.exports !== exports
//한번 쓴 객체 형식을 바꾸지 않고 사용해야한다.

//this
 console.log(this); //전역개체 global이 됨
 
 function a(){
     console.log(this === global);
 }
 a();
//require.main으로 어떤 파일을 실행 할 것인지 알 ㅅ 있음



