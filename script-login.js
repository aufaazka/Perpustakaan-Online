
//Fungsi Validasi
function login() {
    var nama = document.getElementById("log-user").value ; 
    var pass = document.getElementById("log-pass").value ;
   
    if (nama == "kenny" && pass =="12345") {
        location.href="karyawan.html"
    return true;
    
    }else if (nama != "" || pass!=""){
        document.getElementById("log-user").value = '';
        document.getElementById("log-pass").value = '' ;
        alert('Username atau Password SALAH !')
    } else {
        document.getElementById("log-user").value = '';
        document.getElementById("log-pass").value = '' ;
        alert('Masukkan data dengan BENAR')
    }
}

// Fungsi Password and Icon Hide
const pwShowHide = document.querySelector('.icon-eye'),
        pwField = document.querySelector('.pass-up');

        pwShowHide.addEventListener('click', ()=>{

        if (pwField.type === "password"){
            pwField.type = "text";
            pwShowHide.name = "eye-outline";

            

        } else {
            pwField.type = "password";
            pwShowHide.name = "eye-off-outline";

        }
    });





