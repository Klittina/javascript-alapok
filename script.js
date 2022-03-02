console.log("Scriptben");

function init() {
    document.getElementById("elem").innerHTML = "Sya";
    console.log("Script function init");
}

window.addEventListener("load", init, false);
//amikor a böngészőben megtörtént az az esemény h betöltődik az oldal, a load eseményre reagál, és h mi lesz akkor 
//ha betöltődött az oldal

//Változók használata
//Nincsenek változó típusok,  de deklarálni kell őket - var, let, const

var szoveg = "alma";
var szoveg2 = "";
console.log(szoveg2)
szoveg2 = "körte";
console.log(szoveg3);
var szoveg3 = "szilva";
var a = "2";
var b = 3;
//var osszeg = a + b;
var osszeg = Number(a) + Number(b);
console.log(osszeg)

var logikai = false;

if (a === 2) { //Három egyenlőség jel nem csak az értékét hanem a típusát is összehasonlítja
    console.log("Az a egy szám");
    console.log(typeof a);
} else {
    console.log("Az a nem szám");
    console.log(typeof a);
}
var szin = "red";

switch (szin) {
    case "red":
        console.log("Piros");
        break;
    case "green":
        console.log("Zöld");
        break;
    case "blue":
        console.log("Kék");
        break;
    case "purple":
        console.log("Lila");
        break;
    default:
        console.log("Ezt a színt nem ismerem:C");
}
if (szin == "red") {
    console.log("Piros");
} else if (szin == green) {
    console.log("Zöld");
} else if (szin == blue) {
    console.log("Kék");
} else if (szin == purple) {
    console.log("Lila");
} else {
    console.log("Ezt a színt nem ismerem:C");
}