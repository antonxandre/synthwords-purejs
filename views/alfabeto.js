const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let alfabetHtmlList = alfabeto.map(e => `<a class="shadowLetter" onclick="adicionarLetra('${e}')" href="#letra=${e}"> ${e} </a>`).join('');

const alfabetoAtualizado = alfabeto;

const elem = document.querySelector('#alfabeto').innerHTML = alfabetHtmlList;
const palavraDigitada = document.getElementById('palavra-digitada');



document.addEventListener('keydown', (event) => {
    var key = event.key;
    
    if (alfabeto.indexOf(key.toUpperCase()) > -1) {
        adicionarLetra(key.toUpperCase());
     
    }
}, false);

let adicionarLetra = function (letra) {
    palavraDigitada.innerHTML += letra; 
    (function () {
        for (i = 0; i < alfabeto.length; i++) {
            let index = alfabeto.indexOf(letra);
            console.log(index);
            if (index > -1) {
               alfabeto.splice(index, 1);
             
                let novoAlfabeto = alfabeto.map(e => `<a class="shadowLetter" onclick="adicionarLetra('${e}')" href="#letra=${e}"> ${e} </a>`).join('');

                elem.innerHTML = novoAlfabeto;
            }
        }
    })();
}