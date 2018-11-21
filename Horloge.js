var now = new Date();

var Temps = now.getSeconds() + 60 * now.getMinutes() + 3600 * now.getHours();

var AiguilleS = document.getElementById("Seconde");

var AiguilleM = document.getElementById("Minute");

var AiguilleH = document.getElementById("Heure");

function Rotate () {

    Temps++;
    AiguilleS.style.transform = "rotate(" + (Temps * 6) + "deg)";
    AiguilleM.style.transform = "rotate(" + Math.round(Temps / 10) +"deg)";
    AiguilleH.style.transform = "rotate(" + Math.round(Temps / 120) + "deg)";

    setTimeout(Rotate, 1000);
}

Rotate();

