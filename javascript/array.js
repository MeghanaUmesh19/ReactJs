// let cars=["innova","fortuner","verna"]
// console.log(cars);
// console.log(cars.join(" "));
// console.log(cars.join("$"))

// //forEach()
// cars.forEach(function(temp){
//     console.log(temp);
// })

// let numbers=[1,2,3,4,5]
// numbers.forEach((temp)=>{
//     console.log(temp+10)
// })

//map()
let nums=[1,2,3,4]
let res = nums.map((temp)=>{
    return temp+10;
})
console.log(res);

//filter()
res = nums.filter((temp)=>{
    return temp%2==0
})
console.log(res);

//reduce()
res = nums.reduce((currentvalue,nextvalue)=>{
    return currentvalue+nextvalue
})
console.log(res)

let name1="MANASA";
let name2=" AKASH";
 res=name1.concat(name2);
console.log(res);

let name=["MANASA & AKASH LOVES EACH OTHER. THEY ARE SHY, SO THAT MANASA IS TAKING THE NAME OF MEGHA TO EXPRESS HER LOVE TOWARDS AKASH. "]
// name.forEach(funstion (name)){

// }
console.log(name)
