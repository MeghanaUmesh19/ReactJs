// let student={
//     name : "Smith",
//     id : 123,
//     age : 21,
//     myname : function(){
//         return "my name is"+" "+this.name
//     }
// }
// console.log(student.id);
// console.log(student.myname());
// console.log(typeof student);

// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname
//         this.lastname=lastname
//     }
//     //method
//     fullname(){
//         return this.firstname +this.lastname
//     }
// }
// let Person1=new Person("Smrithi ","Mandanna")
// console.log(Person1);
// console.log(Person1.fullname());

// let Person2=new Person("Virat ", "Kohli")
// console.log(Person2);
// console.log(Person2.fullname());

function Chair(color,material){
    this.color=color
    this.material=material
    this.action=function(){
        return "material is "+this.material
    }
}
let x=new Chair("blue","plastic")
console.log(x)
console.log(x.color)
console.log(x.action())



let obj=new Object()
// console.log(obj)
obj.name="Surya"
obj.age=36
obj.func=function(){
    return "Hello "+obj.name
}
console.log(obj)