// let num=[1,2,3,4,45,5,45]
// let evennum=num.filter(x=>x%2==0);
// console.log(evennum);

// let sum=num.reduce((x,y)=>x+y,0); //0 is the initial value
// console.log(sum);


// let product=num.reduce((x,y)=>x*y,1); // 1 is the initial value
// console.log(product);


const student=[
    {name:"Alice", score: 50},
    {name:"Bob", score: 65},
    {name:"Charlie", score: 80},
    {name:"David", score: 45},
    {name:"Rahul", score: 50},
];

// let scores=student.map(x=>x.score);
// console.log(scores);
// let Score = student.filter(x=>x.score>50).reduce((sum, student) => sum + student.score, 0);
// console.log("Total Score:", Score);


// const num=[1,2,3,4,4,9,11,34,45];
// let arr=num.forEach((x) => console.log(x**2));


// sayhello=()=>
// {
// console.log("I am in Hello Function")
// }
// console.log("start");
// setTimeout(sayhello,5000);// gives a delay to a function
// console.log("End");
// setTimeout(sayhello,2000);
// ;

console.log("Start");
setTimeout(()=>{
console.log("First task Completed");
setTimeout(()=>{
console.log("second task completed");
setTimeout(()=>{
console.log("Third task Completed");
},3000);
},2000);
},1000);
console.log("End");