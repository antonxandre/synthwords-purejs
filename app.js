const palavras = [
    "ALGORITMO",
    "CONSOLE",
    "JAVA",
    "VIM",
    "CYBER",
    "ALAN TURING",
    "ADA LOVELACE",
    "ARRAY",
    "VETOR",
    "OBJETO"
];

const QUANTIDADE_VIDAS = 5;
let palavraOriginal = '';
let palavraEmJogo = ''
let venceu = false;

let vidas = QUANTIDADE_VIDAS;
let vitorias = 0;

let palavraAleatoria = function () {
    randomPalavra = palavras[Math.floor(Math.random() * palavras.length)];
    palavraOriginal = randomPalavra;
    return randomPalavra;
}

let alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let alfabetoNovo = [];

const palavraDigitada = document.getElementById('palavra-digitada');
const vidasElement = document.getElementById('vidas');
const vitoriasElement = document.getElementById('vitorias');


let renderPalavraSecreta = function () {
    let palavra = palavraAleatoria();
    palavra = palavra.replace(/[a-z]/gi, '_');
    palavraEmJogo = palavra;
    palavraDigitada.innerHTML = palavra;
    return palavra;
}

function run() {

    vidasElement.innerHTML = `Vidas: ${vidas}`;
    vitoriasElement.innerHTML = `Vitórias: ${vitorias}`;
    renderPalavraSecreta();
    alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    alfabetoNovo = [];
    //escuta teclas do teclado
    let alfabetHtmlList = alfabeto.map(e => `<a class="shadowLetter" onclick="adicionarLetra('${e}')" href="#letra=${e}"> ${e} </a>`).join('');
    document.querySelector('#alfabeto').innerHTML = alfabetHtmlList;
    document.addEventListener('keydown', (event) => {

        var key = event.key;
        if (alfabeto.indexOf(key.toUpperCase()) > -1) {
            adicionarLetra(key.toUpperCase());
        }

    }, false);
};

let adicionarLetra = (letra) => {
    removerLetraAlfabeto(letra)
    if (palavraOriginal.includes(letra)) {
        let novaPalavraComAcertos = ''
        palavraOriginal.split('').map((e, index) => {
            let char = palavraEmJogo[index];
            if (e === letra) {
                char = e;
            }
            novaPalavraComAcertos += char;
        });
        palavraEmJogo = novaPalavraComAcertos;

        verificarSeVenceu();
        palavraDigitada.innerHTML = palavraEmJogo;
    }
    else {
        perdeuUmaChance();
    }

}


let verificarSeVenceu = () => {
    if (palavraEmJogo === palavraOriginal) {
        venceu = true;
        //re-inicializa 
        vidas = QUANTIDADE_VIDAS;
        vitorias++;
        vitoriasElement.innerHTML = `Vitórias: ${vitorias}`;
        alert('Parabéns, você venceu!');
        run();
    }
}

let perdeuUmaChance = () => {
    vidas--;
    vidasElement.innerHTML = `Vidas: ${vidas}`;
    if (vidas <= 0) {
        alert('Você perdeu, não foi dessa vez.');
        run();
    }
}

let removerLetraAlfabeto = (letra) => {
    for (i = 0; i < alfabeto.length; i++) {
        let index = alfabeto.indexOf(letra);
        if (index > -1) {
            alfabetoNovo = (alfabetoNovo + alfabeto.splice(index, 1));
            console.log(alfabeto.length)
            let newhtmlList = alfabeto.map(e => `<a class="shadowLetter" onclick="adicionarLetra('${e}')" href="#letra=${e}"> ${e} </a>`).join('');
            document.querySelector('#alfabeto').innerHTML = newhtmlList;
        }
    }
};

run(); z