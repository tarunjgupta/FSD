// "use strict"
// let a=12;
// let b=22/7;5
// let c="hello";
// let d=[1,2,3,4,]
// let e=true;
// let f={
//     name:"Tarunj",
//     id: 12,
// }

// let x="12"/"6";
// let bol=true;
// let str=String(bol);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);
// console.log(typeof x);
// console.log(str.charAt(1));



// let str="12";
// let num=Number(str);
// console.log(typeof num);


// let str="abh";
// let num=Number(str);
// console.log(typeof num);
// console.log(num);


// let str="true";
// let num=Boolean(str);
// console.log(typeof num);
// console.log(num);


// let str=1;
// let num=Boolean(str);
// console.log(typeof num);
// console.log(num);


// let str=0;
// let num=Boolean(str);
// console.log(num);


// let str=-1;
// let num=Boolean(str);
// console.log(num);


// let str=12;
// let num=Boolean(str);
// console.log(num);


// //ok and cancel choice
// function display(){
//     let x=confirm("Are you sure?");
//     alert("user click "+x);
// }


// function display(){
//     let x=prompt("Enter your name","Abhishek");
//     alert(x);
// }


// let a="12";
// let b=12.0;
// console.log(a==b);
// console.log(a===b);

function validate()
{
   let login=document.getElementById("login").value; 
   let pass=document.getElementById("pass").value; 
   let p1=document.getElementById("result");
   if(login=="admin" && pass=="admin")
   {
         p1.innerText="Login Success";
   }
   else
   p1.innerText="Login Failed";
return false;
}