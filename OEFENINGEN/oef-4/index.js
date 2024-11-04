/*We maken onze klaslijst. Vraag aan de gebruiker hoeveel namen hij wil ingeven en vul deze in een array.
Zorg ervoor dat je de namen onder elkaar afdrukt op de volgende manier.
Dirk
Sam
Luc
Bob
*/

let aantalNamen = parseInt(prompt("Hoeveel namen wil je ingeven?"));
let klaslijst = [];

for (let i = 0; i < aantalNamen; i++) {
    let naam = prompt(`Geef naam ${i + 1} in:`);
    klaslijst.push(naam);
}

console.log("Klaslijst:");
for (let i = 0; i < klaslijst.length; i++) {
    console.log(klaslijst[i]);
}



















