
// Fungsi Button
let btn = document.getElementById('btn');
let stat = document.getElementById('sign')

var x=0;

btn.addEventListener('click', function onClick() {

    x++ ;

    if (x == 1){
        btn.style.backgroundColor = '#D4F2F8';
        btn.style.color = '#103054';
        stat.innerHTML = 'Keluar'
        
    }
    if (x == 2){
        btn.style.backgroundColor = '#4CAF50';
        btn.style.color = '#efefef';
        stat.innerHTML = 'Masuk'
        x=0;
    }
});