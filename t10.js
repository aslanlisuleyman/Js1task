var x=parseInt(prompt("x-i daxil et"))
var y=parseInt(prompt("y-i daxil edin"))

if(x>0 && y<0){
    console.log((4*x)+(2*y)+4)
}
else if(x>0 && y===0){
console.log((2*x)-y+3)
}
else if(x<0 && y>0){
    console.log((3*x)+(4*y)+3)
}
else{
    console.log("uygun araliq secin")
}
