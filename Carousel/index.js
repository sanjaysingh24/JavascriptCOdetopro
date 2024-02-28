let names = ["Rohit","aanchal","shubham","gunjan","ishwar","Vedant"];
let index = 0;

function update(){
    let context = document.getElementsByClassName("text-content");
    context[0].innerHTML= names[index];

}
function next(){
   index = (index+1) % names.length;
   update();
}
function prev(){
 if(index>0){
    index = (index-1) % names.length;
    update();
 }
}
