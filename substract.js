function substract() {

    var Vg = document.getElementById('VG').value;
    var Vs = document.getElementById('VS').value;
    var Vgs = Vg-Vs;
    var res = "Vgs equals to : " + Vgs.toString() + " V ";
    document.getElementById('resultjs').innerHTML = res ;

}


