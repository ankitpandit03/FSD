function task(message,delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(message);
            resolve();
        },delay);
    });
}
task("First task completed",1000)
   .then(()=>task("second task completed",2000))
   .then(()=>task("third tasj cmpleted",3000))
   .then(()=>task("fourth",4000))