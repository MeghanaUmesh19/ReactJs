let mypromise = new Promise(function(resolve , reject){
    let n1=Number(prompt("enter a number"))
    let n2=Number(prompt("enter a number"))
    if(n1===n2)
    {
        resolve("numbers are matching : result")
    }
    else{
        reject("numbers are mismatching : error")
    }
})
mypromise.then(
    function(data){console.log(data)}
)
.catch(
    function(err){console.log(err)}
)
.finally(
    function(){console.log("I'll execute ENADRU AGLI")}

)