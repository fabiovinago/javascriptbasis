// Maak een knop die wanneer erop wordt geklikt, de achtergrondkleur van de pagina wijzigt naar een willekeurige kleur.
// Built in random functies
// Knop in het exacte midden van de pagina
// Tip: Math.floor(Math.random()*256)
/*const kleuren = [ "lightcoral", "lightseagreen", "lightsalmon", "lightpink", "lightgreen", "lightskyblue", "lightblue", "lightsteelblue", "lightyellow", "lightgoldenrodyellow", "lavender", "thistle", "plum", "violet", "aquamarine", "khaki", "peachpuff", "palegreen", "paleturquoise", "palevioletred" ];*/

function getRandomRGBColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    return `rgb(${r},${g},${b})`
}
function getRandomRGBColorOpacity(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    const a = Math.random().toFixed(1);

    return `rgb(${r},${g},${b})`
}

let knop = document.getElementById("veranderKleur");
knop.addEventListener("click", function (){
    document.body.style.backgroundColor = getRandomRGBColorOpacity();
})