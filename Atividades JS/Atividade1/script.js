const h1 = document.getElementById('titulo');
const a = document.querySelector('a');
const ul = document.querySelector('ul');
const ol = document.getElementById('lista-ordenada')
h1.innerText = "Atividade JS"
a.innerText = "Site da Proz"

ul.innerHTML = `
    <li>Teste1</li>
    <li>Teste2</li>
    <li>Teste3</li>
`;
ol.innerHTML = `
    <li><a href="https://www.techtudo.com.br/">TechTudo</a></li>
    <li><a href="https://www.google.com.br">Google</a></li>
    <li><a href="https://developer.mozilla.org/en-US/">MDN Web Docs - Mozilla</a></li>
`;
