function increment(){
    let value = document.getElementById("value");
    value.innerHTML++; 
}

function decrement(){
    let value = document.getElementById("value");
   if(value.innerHTML>0){
    value.innerHTML--; 
   }
}
function reset(){
    let value = document.getElementById("value");
    value.innerHTML =0;
}