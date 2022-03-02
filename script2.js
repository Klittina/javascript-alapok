//tömbök

var tomb = [];
var tomb2 = [2, 3, 4, 5, 6];
var tomb3 = [4];

console.log(tomb.length);
console.log(tomb2.length);
console.log(tomb3.length);

tomb2[0] = 12;
var txt = "";
for (let index = 0; index < tomb2.length; index++) {
    //console.log(tomb2[index]);
    txt += tomb2[index] + " , ";

}
console.log(txt);

var gyumolcs = ["alma", "málna", "barack", "ribizli", "paradicsom"];
var gyumolcsSzin = ["piros", "piros", "sárga", "piros", "piros"];
var gyumolcsAr = [240, 500, 300, 250, 500];
//van-e sárga színű gyümölcs
var i = 0;

while (i < gyumolcsSzin.length && !(gyumolcsSzin[i] === "sárga")) {
    i++;
}
var vane = i < gyumolcsSzin.length;
console.log("Van sárga színű gyümölcs: " + vane);
//mennyi a piros színű gyümölcsök értéke;
var pirosak = 0;
for (let index = 0; index < gyumolcsSzin.length; index++) {
    if (gyumolcsSzin[index] == "piros") {
        pirosak++;
    }
}
console.log("Ennyi piros színű gyümölcs van: " + pirosak);

var i = 0;
var osszar = 0;
for (let index = 0; index < gyumolcsSzin.length; index++) {
    if (gyumolcsSzin[index] == "piros") {
        osszar = osszar + gyumolcsAr[index];
    }
}
console.log("Az összes piros színű gyümölcs ára: " + osszar)
    //Hány 300 ft alatti termék van
    //vane 1000 ft feletti termék
var haromszazalatt = 0;
var haromszaz = 300;
var ezerfelett = false;
var ezer = 1000;
for (let index = 0; index < gyumolcsAr.length; index++) {
    if (gyumolcsAr[index] < haromszaz) {
        haromszazalatt++;
    }
    if (gyumolcsAr[index] > ezer) {
        ezerfelett = true;
    }
}
console.log("Ennyi gyümölcs van 300 ft alatt: " + haromszazalatt);
console.log("Van 1000 ft feletti termék: " + ezerfelett);