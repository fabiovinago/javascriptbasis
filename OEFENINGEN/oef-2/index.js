/*Je schrijft 3 arrays. De eerste 2 arrays vul je met een lus op met waarden van 0 tem 10.
De derde array vul je vervolgens op met de de som van de waarden in arrays 1 en 2.
Weergave op het scherm:
1+1 = 2
2+2 = 4
3+3 = 6
4+4 = 8.
*/

let array1 = [];
let array2 = [];
let array3 = [];

for (let i = 0; i <= 10; i++) {
    array1.push(i);
    array2.push(i);
}
for (let j = 0; j <= 10; j++) {
    array3.push(array1[j] + array2[j]);
}
for (let k = 0; k <= 10; k++) {
    console.log(`${array1[k]} + ${array2[k]} = ${array3[k]}`);
}

















