//단방향 암호화(crypto)
//대표주자는 해시기법
//해시는 평문을 암호로 만들면 다시 평문으로 만들 수 없게 하는 것

//createHash(알고리즘): 사용할 해시 알고리즘을 넣어준다
//update(문자열) : 변환할 문자열을 넣어줍니다.
//digest(인코딩) : 인코딩할 알고리즘을 넣어줍니다.

//--hash--
const crypto=require('crypto');

console.log('base64: ', crypto.createHash('sha512').update('비밀번호').digest('base64')); //비밀번호라는 글자 자체는 저장하지 않는 거임
console.log('hex: ', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64: ', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));

//그래서 해쉬를 해킹하지는 않고 사람들이 실수 할만한 걸로 해킹을 함.

//pbktf2(알고리즘)
//pbktf2 인수로 순서대로 비밀번호, salt, 반복횟수, 출력바이트, 알고리즘

const crypto1=require('crypto');

crypto.randomBytes(64, (err, buf) => {
    const salt=buf.toString('base64'); //salt에 따라서 비밀번호가 달라짐. 해독을 더 어렵게 하기위해 추가함.
    console.log('salt:', salt);
    crypto.pdkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
        console.log('password:', key.toString('base64'));
    });
});

//양방향 암호화
//>>> 대칭형 암호화 (암호문 복호화 가능)

const crypto2=require('crypto');

const algorithm='aes-256-cbc';
const key='abcsdsdkanskdamndaskd';
const iv='12345667';

const cipher=crypto.createCipheriv(algorithm, key, iv);
result+=cipher.final('base64');
console.log('암호화:', result);



