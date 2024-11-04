/* Je schrijft 3 arrays. De eerste 2 arrays vul je met een lus op met telkens 11 willekeurige in te lezen getallen.
De derde array vul je vervolgens op met de de som van de waarden in arrays 1 en 2.
Weergave op het scherm (voorbeeld):
3+2 = 5
1+1 = 2
2+100 = 102
3+4 = 7
900+4 = 904
*/

let array1 = [];
let array2 = [];
let arraySom = [];

for (let i = 0; i < 11; i++) {
    array1.push(Math.floor(Math.random() * 1000) + 1);
    array2.push(Math.floor(Math.random() * 1000) + 1);
}
for (let i = 0; i < 11; i++) {
    arraySom.push(array1[i] + array2[i]);
}
for (let i = 0; i < 11; i++) {
    console.log(`${array1[i]} + ${array2[i]} = ${arraySom[i]}`);
}




















