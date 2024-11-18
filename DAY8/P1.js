const myPromise=new Promise((resolve,reject)=>{
    let success=true;
    setTimeout(()=>){
    if(success){
        resolve ("Data send succeessfully");

    }
    else{
        reject("data not found");}
    },5000);
 });

myPromise.then((message)=>{
    console.log("Data: "+message);})
    .catch((error)=>{
        console.log(error);
    });
