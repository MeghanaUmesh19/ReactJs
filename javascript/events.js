//click event:

//onclick [<button id="btn">add on the click</button>]
let btnElement=document.getElementById("btn")
btnElement.onclick=function(){
    let num1=Number(prompt("ENTER A NUMBER"))
    let num2=Number(prompt("ENTER A NUMBER"))
    alert(num1+num2)
}

//dblclick 
let btnElement1=document.getElementById("btn")
btnElement1.dblclick=function(){
    let num1=Number(prompt("ENTER A NUMBER"))
    let num2=Number(prompt("ENTER A NUMBER"))
    alert(num1+num2)
}
                
//<button id="datebtn">click me to get the date</button>
let datebtnElement = document.getElementById("datebtn")
datebtnElement.addEventListener("click", ()=>{
    let date=new Date()
    alert(`Today's date is ${date.toLocaleDateString()}`)
})

//CLICK [<button id="timebtn">double click to show time</button>]
let timebtnElement = document.getElementById("timebtn")
timebtnElement.addEventListener("click", ()=>{
    let time=new Date()
    alert(`NOW THE TIME IS ${time.toLocaleTimeString()}`)
})

//FOCUS [<input id="form-field" type="email" placeholder="enter email id">
{/* <small id="conf-msg">Your email is confidential. We will not disclose to anyone</small>
] */}
let confidential_msg=document.getElementById("conf-msg")
let inputElement=document.getElementById("form-field")
inputElement.addEventListener("focus",()=>{
    confidential_msg.style.cssText="color:red;"
    inputElement.style.cssText="background-color:yellow;border:blue 2px solid;outline:none"
    confidential_msg.style.display="inline"
})
//blur()
inputElement.addEventListener("blur",()=>{
    inputElement.style.cssText="background-color:white;border:black 2px solid;"
    confidential_msg.style.display="none"
})

//mouseover() [<h1 id="heading">HELLO WORLD BRING CURSOR ON ME I'LL HIDE</h1>]
let h1=document.getElementById("heading")
h1.addEventListener("mouseover",()=>{
    h1.style.display="none"
})

//mouseout()
h1.addEventListener("mouseout", ()=>{
    h1.style.display="inline"
})


//keyup() [<p>you entered <span id="data"></span> in the above feild</p>
{/* <input id="something" type=" text" placeholder="enter something"] */}
let dataElement = document.getElementById("data")
let input = document.getElementById("something")
input.addEventListener("keyup",(e)=>{
    dataElement.innerHTML=`<b>${e.target.value}</b>`
})

//submit
let formElement=document.querySelector("form")
formElement.addEventListener("submit",(event)=>{
    // console.log(event.target[0].value);
    // console.log(event.target[1].value)
    console.log(event.target.username.value);
    console.log(event.target.emailid.value);

    formElement.reset()
    event.preventDefault()
})