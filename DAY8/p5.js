async function orderfood(name,time){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(name+"prepared");
    },time);
});
}

async function restaurant(){
    console.log("TAsk completed");
    const pizza=await orderfood("pizaza",1000);
    console.log(pizza);
    const burger=await orderfood("burger",2000);
    console.log(burger);
}
restaurant();