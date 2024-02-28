// function menu(){
//     let menu = document.getElementsByClassName('menu');
//     if (menu[0].style.display === "none" || menu[0].style.display === "") {
//         menu[0].style.display = "block";
//       } else {
//         menu[0].style.display = "none";
//       }
//     }
  
   
function color(){
  let colors = ["red","green","yellow","blue","black","pink"];
  let body = document.getElementById("body");
  let rand = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[rand];
  
}