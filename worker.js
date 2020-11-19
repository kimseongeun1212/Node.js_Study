const {Worker,isMainThread, parentPort} = require('worker_threads')
//분기 처리해야함
if(isMainThread){ //같은 파일에서 메인스레드 이냐.
    const worker=new Worker(__filename);
    worker.on('message', (value)=>console.log('워커로부터', value));
    worker.on('exit', ()=> console.log('워커 끝~'));
    worker.postMessage('ping');

}else{//같은 파일에서 워커스레드이냐
    parentPort.on('message', (value)=>{
        console.log('부모로부터', value);
        parentPort.postMessage('pong');
        parentPort.close();
    })
}