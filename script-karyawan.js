
// Fungsi Toggle
let toggle =document.querySelector(".main");
let navigation = document.querySelector('.sidebar');
var x = 0;

    toggle.addEventListener('click', () =>{
    navigation.classList.toggle("hide");
    x++;

    if (x == 1){
        document.querySelector('.content-frame').style.marginLeft = '60px';
    }
    
    else if (x == 2) {
        document.querySelector('.content-frame').style.marginLeft = '280px';
        x = 0 ;
    }
});

