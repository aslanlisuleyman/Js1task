var eded=parseInt(prompt("Balinizi daxil edin"))

if(eded>0 && eded<100){
    if(eded>=90){
        console.log("A")
    }
     else if (eded>=80 && eded<=89){
        console.log("B")
    }
     else if(eded>=70 && eded<=79){
        console.log("C")
    }
    else if(eded>=60 && eded<=69){
        console.log("D")
    }
    else if(eded<=59){
        console.log("F")
    }
}
else{
    console.log("Zehmet olmasa musbet eded qeyd edin")
}