    function navbar(){
        let item = document.getElementsByClassName('navbar_items');
       if(item[0].style.display=='none' || item[0].style.display==""){
        item[0].classList.toggle('navbar');
        
       }
       else{
       
        item[0].classList.toggle('navbar_items');
       }
    }