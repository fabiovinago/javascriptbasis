/*Zorg ervoor dat je het alfabet in een array inleest in kleine letters. Gebruik hiervoor een lus
Zorg ervoor dat je deze array naar een andere array kopieert en dat deze opgevuld is met het alfabet in hoofdletters
Gebruik een Built-in functie hiervoor
*/

let alfabetKlein = [];
for (let i = 0; i < 26; i++) {
    alfabetKlein.push(String.fromCharCode(97 + i));
}
let alfabetGroot = alfabetKlein.map(letter => letter.toUpperCase());

console.log("Kleine letters: ", alfabetKlein);
console.log("Hoofdletters: ", alfabetGroot);




















