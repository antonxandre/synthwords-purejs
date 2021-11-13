const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

alfabetHtmlList  = alfabeto.map(e => `<a class="shadowLetter" href='#letra-${e}'> ${e} </a>`  ).join('');

var elem = document.querySelector('#alfabeto').innerHTML = alfabetHtmlList;

