
let display=document.getElementById("display")
function input(event){
 display.value+=event.target.value
}
function evaluvate(){
    let exp=display.value;
    console.log(exp)
}