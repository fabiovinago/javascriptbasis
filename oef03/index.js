// Controleer even of oneven. Schrijf een functie isEven die controleert of een getal even is.
// Resultaat moet true of false zijn

let testGetal = parseInt(prompt('Geef een getal in'));
function isEven (getal){
    return getal%2===0;
}
console.log(isEven (testGetal));
