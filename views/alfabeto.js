const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let alfabetoNovo = [];


let alfabetHtmlList = alfabeto.map(e => `<a class="shadowLetter" onclick="adicionarLetra('${e}')" href="#letra=${e}"> ${e} </a>`).join('');
//const alfabetoAtualizado = alfabeto;

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
            if (index > -1) {
                alfabetoNovo = (alfabetoNovo + alfabeto.splice(index, 1));
                console.log(alfabeto.length)
                let newhtmlList = alfabeto.map(e => `<a class="shadowLetter" onclick="adicionarLetra('${e}')" href="#letra=${e}"> ${e} </a>`).join('');
                document.querySelector('#alfabeto').innerHTML = newhtmlList;
             
            }
        }
    })();
}