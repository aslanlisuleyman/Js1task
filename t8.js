var yas=parseInt(prompt("yasinizi qeyd edin"))

if(yas>0){
    if(yas<18){
        console.log("Yeniyetme")
    }
    else if(18<=yas && yas<=64){
        console.log("Yetkin")
    }
     else if(yas>=64) {
        console.log("yasli")
     }
}
else{
    console.log("Zehmet olmasa musbet bir eded qeyd edin")
}