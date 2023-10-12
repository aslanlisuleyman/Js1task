var num1=parseInt(prompt("num1 e eded yaz"))
var num2=parseInt(prompt("num2 e eded yaz"))
var num3=parseInt(prompt("num3 e eded yaz"))

if(num1>0 && num2>0 && num3>0){
    if(num1>num2 && num1>num3){
        console.log("num1 en boyudur")
    }
    else if (num2>num1 && num2>num3){
        console.log("num2 boyukdur")
    }
    else if(num3>num1 && num3>num2){
        console.log("num3 en boyukdur")
    }
}
else{
    console.log("musbet eded daxil edin")
}