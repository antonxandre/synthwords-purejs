// const palavras = [
//     "Console",
//     "Compilador",
//     "Olá Mundo",
//     "Propriedade",
//     "SuperClasse",
//     "Link",
//     "Polimorfismo",
//     "Vetor",
//     "Tag",
//     "Algoritmo",

// ]
const palavras = [

  "ALGORITMO",

]


function randomWord() {

  randomPalavra = palavras[Math.floor(Math.random() * palavras.length)];
  return randomPalavra;

}

const index = palavras.indexOf(randomWord());
if (index > -1) {
  palavras.splice(index, 1);
}

//exportar palavras e a palavra sorteada
