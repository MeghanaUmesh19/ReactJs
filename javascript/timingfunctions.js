// console.log("start");
// function call(){
//     console.log("calling")
// }

// setTimeout(call,5000)
// console.log("end")

let count=0;
let x=setInterval(()=>{
    console.log(count++);
},1000)

clearTimeout(x)
