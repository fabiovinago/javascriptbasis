/* Schrijf een functie vermenigvuldigController die twee getallen vermenigvuldigt en controleert
of het resultaat groter is dan 100. Output = true or fasle */

let getal1 = parseInt (prompt('Geef een getal in'));
let getal2 = parseInt(prompt('Geef een getal in'));

function vermenigvuldigControleer(a,b){
    return a*b > 100;

}
console.log (vermenigvuldigControleer(getal1,getal2))


