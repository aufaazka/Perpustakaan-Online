

//Fungsi Reset
function reset() {

    if (document.getElementById('old-pass').value == '' || document.getElementById('new-pass').value == '' ){

        alert ('Isi kolom dengan BENAR')

    } else if (document.getElementById('old-pass').value != "12345"){

        document.getElementById('old-pass').value = '';
        document.getElementById('new-pass').value = '';
        
        alert('Password Lama Salah')

    } else {
        document.getElementById('new-pass').value = '';
        document.getElementById('old-pass').value = '';

        alert ('Password berhasil diganti')
    }
}