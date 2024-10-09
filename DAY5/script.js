// let a=2;
// let b=22/7;
// let c="hello";
// let d=[1,2,3,4]
// let e={
//     name:"ankit",
//     id:37
// }
// let f=true;
// let x="12"/"2";
// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)
// console.log(typeof d)
// console.log(typeof e)
// console.log(typeof f)
// console.log(x);


// let f=true;
// let x="12"/"2";
// let bol=true;
// let str=String(bol);
// console.log(str.charAt(1));

// let str="ank";
// let num= Number(str);
// console.log(typeof num);
// console.log( num);

// function display(){
//    let x= confirm("Are you sure");
//    alert("user click"+x);
// }


// function display(){
//     let x=prompt("Enter your name","Ankit");
//     alert(x);
// }

// let a="12";
// let b=12.0;
// console.log(a==b);
// console.log(a===b);
 
function validate(){
    let login=document.getElementById("login").value;
    let pass=document.getElementById("pass").value;
    let p1=document.getElementById("result");
    if(login=="admin" && pass=="admin"){
        p1.innerText="Login successs";

    }else p1.innerText="login failed";
    return false;
}