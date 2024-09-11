const body = document.querySelector('body')
const titulo_produto = document.createElement('h1');
const descricao = document.createElement('p');
const preco = document.createElement('h3');
const img = document.createElement('img')
titulo_produto.id = 'titulo';
titulo_produto.innerText = "Dell G15"

img.src = './dellg15.jpeg'
descricao.innerText = `Jogue do seu jeito, seja quem você for, esteja onde estiver. 
Use um notebook com uma estética moderna durante a sua jornada para o topo dos rankings. 
Personalize a aparência do notebook controlando a iluminação do teclado RGB opcional de quatro zonas, gerenciado pelo novo Alienware Command Center (disponível com Windows).`
preco.innerText = 'R$ 4.698,00'

body.appendChild(titulo_produto)
body.appendChild(img)
body.appendChild(descricao)
body.appendChild(preco)