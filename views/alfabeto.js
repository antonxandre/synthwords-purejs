const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

alfabetHtmlList = alfabeto.map(e => `<a class="shadowLetter" onclick="adicionarLetra('${e}')" href="#letra=${e}"> ${e} </a>`).join('');

const elem = document.querySelector('#alfabeto').innerHTML = alfabetHtmlList;
const palavraDigitada = document.getElementById('palavra-digitada');



document.addEventListener('keydown', (event) => {
    var key = event.key;
    var code = event.code;
    if (alfabeto.indexOf(key.toUpperCase()) > -1) {
        palavraDigitada.innerHTML += key;
    }

}, false);

let adicionarLetra = function (letra) {
    palavraDigitada.innerHTML += letra;
}