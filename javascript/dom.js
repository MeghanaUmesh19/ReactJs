let x=document.getElementById("sample")

console.log(x.innerHTML);
console.log(x.innerText);
console.log(x.textContent);

function changeContent(){
    x.innerText="HELLO GALAXY"
}

function changeStyles(){
    x.style.cssText="color:green ; font-style:italic"
}

x.setAttribute("title","javascript is awesome")

function darkMode(){
    let togglebtn=document.getElementById("togglebtn")
    let bodyElement=document.querySelector("body")
    bodyElement.classList.toggle("dark")
    if(bodyElement.classList.contains("dark")){
        togglebtn.innerText="light mode"
    }
    else{
        togglebtn.innerText="dark mode"
    }
}