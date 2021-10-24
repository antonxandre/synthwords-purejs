var elem = document.querySelector('#nav');


var html = elem.innerHTML;


elem.innerHTML = `
<ul>
    <a href="http://google.com.br"><li>
     Ínicio
    </li> </a>
    <a><li>
     História
    </li> </a>
    <a><li>
     Mais informações
    </li> </a>
    
</ul>
`;
