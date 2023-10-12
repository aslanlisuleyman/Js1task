var saat=parseInt(prompt("Eded daxil edin"))

if (saat > 0 && saat <= 24) {
    if (saat >= 0 && saat < 12) {
        console.log("Sabahiniz xeyir");
    } else if (saat >= 12 && saat < 18) {
        console.log("gunortaniz xeyir");
    } else {
        console.log("Axsaminiz xeyir");
    }
}
else{
    console.log("Qeyd olunan araligdan bir eded yazin")
}