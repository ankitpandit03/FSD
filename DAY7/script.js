// let num=[1,2,3,4,5,6,7];
// // Map
      // let newnum=num.map(x=>x*2);
      // console.log(newnum);

// //filter

     // let evennum=num.filter(x=>x%2==0);
      // console.log(evennum);

// // Accumulator

    // //  //for sum

          //   let sum=num.reduce((a,b)=>a+b,0);
          //   console.log(sum);


    // //  //for product

        // let product=num.reduce((a,b)=>a*b,1);
        // console.log(product);  

// const students=[
//     {name:"Alice",score:50},
//     {name:"Bob",score:65},
//     {name:"Charlie",score:80},
//     {name:"David",score:45},
//     {name:"rahul",score:50}
// ];
// let scores=students.map(x=>x.score);
// console.log(scores);
//   let sum=scores.reduce((x,y)=>x+y,0);
//  console.log(sum);
//  console.log(scores.reduce((x,y)=>x+y,0));
//       let scores1=students.map(x=>x.score).reduce((x,y)=>x+y,0);
//       console.log(scores1);

// let score=students.filter(x=>x.score>60).reduce((a,b)=>a+b.score,0);
//   console.log(score);

// let num=[12,3,3,4,4,4,4,98];
// let arr=num.forEach((x)=>console.log(x*3));
// console.log("..............................................");
// num.forEach((x)=>console.log(x*3));



// sayhello=()=>{
//     console.log("i am in hello function");

// };
// console.log("start");
// setTimeout(sayhello,3000);
// console.log("end");


console.log("start");
setTimeout(()=>{
    console.log("first task completed");
    setTimeout(()=>{
        console.log("second task");
        setTimeout(()=>{
            console.log("third task ");
        },3000);
    },2000);
},1000);
console.log("end");