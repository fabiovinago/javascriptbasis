// Hoogste getal: gebruik Math.max in een functie hoogste die het grootste getal van drie parameters retourneert


let getal1 = parseInt(prompt('Geef een getal in'));
let getal2 = parseInt(prompt('Geef een getal in'));
let getal3 = parseInt(prompt('Geef een getal in'));
function hoogste(a,b,c){
    return Math.max(a,b,c);

}
console.log(hoogste(getal1,getal2,getal3));

