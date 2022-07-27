// deklarasi var
    var list1 = [];
    var list2 = [];
    var list3 = [];
    var list4 = [];
    var list5 = []

    var n = 1;
    var x = 0;

    // fungsi add
    function AddRow(){

        var AddRown = document.getElementById('show');
        var NewRow = AddRown.insertRow(n);
        // mengambil data
        list1[x] = document.getElementById("Genre").value;
        list2[x] = document.getElementById("bname").value;
        list3[x] = document.getElementById("pname").value;
        list4[x] = document.getElementById("pdate").value;
        list5[x] = document.getElementById("kdate").value;

  if (list3[x] != ''  && list4[x] != '' && list5[x] != '' ){

        // deklarasi
        var cel1 = NewRow.insertCell(0);
        var cel2 = NewRow.insertCell(1);
        var cel3 = NewRow.insertCell(2);
        var cel4 = NewRow.insertCell(3);
        var cel5 = NewRow.insertCell(4);

        // memasukkan data ke web
        cel1.innerHTML = list1[x];
        cel2.innerHTML = list2[x];
        cel3.innerHTML = list3[x];
        cel4.innerHTML = list4[x];
        cel5.innerHTML = list5[x];

        n++;
        x++;

    }else {
  alert ('Isi data dengan lengkap!')
}
}