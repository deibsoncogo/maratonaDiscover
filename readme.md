# Rocketseat - Maratona Discover
Um curso realizado pelo **Mayk Brito** da Rocketseat

Neste curso iremos criar uma aplicação com a **metodologia de frontend** usado HTML, CSS, JavaScript e mais algumas outras coisas

## Aula 1 - A base de tudo
>Estratégias importantes para seu estudo de programação Web, ajustar sua mentalidade, conhecer nossa comunidade, além da apresentação das tecnologias HTML e CSS que usaremos na nossa Aplicação e o melhor: Vamos iniciar nosso app

O frontend é tudo aquilo que o usuário possui acesso
Hard skills é tudo aquilo técnico que sabemos
Soft skills é as coisas que não envolve a programação como ser organizado

Uma pessoa generalista procura estudar diversas coisas ao mesmo tempo, e um especialista foca somente em uma ferramenta coisa como backend, devemos ser os dois tipos mais ser um especialista de algo atrai novos olhares

Temos que ter foco em tudo que fazemos e para conseguir isso temos que utilizar algumas técnicas como o Pomodo, ele quer dizer que devemos ter intervalos curtos em certos tempos como 25 minutos de trabalho e 5 de minutos livre

Mais além disso precisamos ter um local silencioso e sem interrupções
Para ter certeza que estamos aprendendo temos que duvidar oque é ensinado
Aprender algo é a combinação da pratica com o tempo
Index é o nome padrão utilizado para falar que o arquivo possui dados main
Hyper Text Markup Language (HTML) é uma linguagem de marcação de hiper texto
Cascading Style Sheets (CSS) é uma folha de estilo

O CSS funciona em formato de cascata onde isso quer dizer que a configuração que vem por último será a utilizada, mais existe um grau de hierarquia onde mesmo se um item mais fraco como um h1 tentar trocar a cor de * isso não vai acontecer

Devemos criar a estilização em um arquivo separado mais evitar poluição visual
Box mode é o modelo das tag que o usuário visualiza

>14/01/2021

## Aula 2 - Finalização do HTML + CSS
>Vamos adicionar detalhes mais elegantes, como imagens, acessibilidade e disposição dos elementos na página. Finalizaremos o HTML e o CSS da nossa aplicação

Temos o site [CSS Tricks](https://css-tricks.com/) que é composto por diversas idéias de como usar o CSS, um site idéal para você se rever oque já esqueceu a aprender novas formas de aplicação

Para criar uma classe automaticamente com o Emmit usamos o sinal de ponto, o carácter jogo da velha nos fala que não devemos sair da página atual ao clica no link
````
a.button.new
<a href="#" class="button new">+ Nova Transações</a>
````

Uma font size 100% é igual a 16px em um navegador

O display grid permite você manipular a caixa desde horizontalmente como verticalmente

Input é a entrada de dados e output são as saídas, o form serve para capturar dados

>21/01/2021

## Aula 3 - Adicionando JavaScript
>Nessa aula deixaremos a nossa aplicação funcional! Aplicaremos a linguagem JavaScript e faremos nosso programa ter funcionalidades como calcular as entradas e saídas, adicionar e remover uma transação e salvar tudo no navegador

Primeiro de tudo vamos remover os comandos de JavaScript no index e colocar no arquivo script.js assim deixando o arquivo mais limpo e fácil de entender
````
<script src="./script.js"></script>
````

Existe um truque para tratar com dinheiro onde usamos somente números e depois formatamos
````
R$ -500,00    -->   -50000
````

A utilização de template literals (``) permite usar variáveis como abaixo
````
const html = `
  <td class="description">${transaction.description}</td>
`
````

O COMANDO ABAIXO FAZ A SUBSTITUIÇÃO DE CARÁCTERES
````
replace(/\D/g, "")
````

Realizei diversas anotações nos comandos, então para ver tudo que aconteceu temos que fuçar os demais arquivos

>29/01/2021

## Aula 4 - Aula de Encerramento
>Perguntas e respostas, quais os próximos passos para continuar evoluindo em 2021 e sorteio exclusivo de uma bolsa de estudos integral para quem chegou até o fim

Primeiro de tudo vamos corrigir algumas linhas de comandos pois não é necessário a utilização do **replace** pois o **value** é um number e eles não possui virgulas ou pontos sem falar que o replace não está funcionando corretamente

Ter um bom [Linkedin](https://www.linkedin.com/) é fundamental pois poucas empresas da tecnologia aceitam um currículo impresso

Saber o inglês é fundamental pois tudo envolve está lingua mais para aprender é muito complicado então devemos focar no **inglês instrumental** que é aprender somente oque envolve sua profissão

Devemos aprender algumas coisas como fundamentos da programação para saber como as coisas funcionam como sua visão, algoritmos, estrutura de dados, lógica de programação, cliente, servidor, HTTP e muito mais

O HTML e CSS devemos colocar na prática oque aprendemos pois somente estudando não vamos conseguir guarda, para fazer isso podemos:
  * Criar micro atividades escolhendo algum site que você curta e tentar replicar algum componente por vez, depois crie variações como a implementação de navbar, buttons, forms, headers, footers, articles, cards, modals e muito aonde não existe
  
  * Criar macro atividades mais somente depois de treinar muito com as micros atividades, para isso você pode inventar sites com algumas páginas, dar vida a layouts do [Figma](https://www.figma.com/), [Dribble](https://dribbble.com/) e [Behance](https://www.behance.net/)

Temos os seguintes sites que possui muita informação sobre a programação:
  *[Documentação MDN](https://developer.mozilla.org/pt-BR/)
  *[CSS Trincks](https://css-tricks.com/)

Git é fundamental para você trabalhar em equipe e o Github vai permitir deixar os projetos salvo na internet para seus colegas utilizarem e também servirá como seu portfólio mostrando seu progresso e sua constância de aprendizagem

O JavaScript é a linguagem que mais está dominando o mercado e aprender uma linguagem de programação é a parte mais difícil de tudo

Ajax é a utilização de formulário que envia as informações para backend sem atualizar a página que o usuário está usando, com isso usaremos promises, async com await, programação funcional e programação orientada a objetos

Depois de conseguirmos realizar o básico com facilidade devemos dificultar para pode sair da zona de conforto, para isso devemos aprender sobre o Propotype, arquitetura de projetos e tentar fazer clones de aplicações complexas aplicando as funcionalidade que ele já possui

Comece a introduzir algumas ferramentas mais avançadas como SASS, Babel e Webpack

Para desenvolver um back end bom devemos saber oque é API, Rest e como funciona algumas ferramentas do momento como Node JS, Express, Mongo DB, SQL ou NoSQL

O React é um framework onde ele permite um desenvolvimento mais rápido, maior escalabilidade, manutenção do seu projeto, melhor trabalho com o estado da aplicação e dos componentes, ele executa diversas validações pois ele possui o conhecimento de como tudo funciona, da para criar um projeto sem um framework onde o Node JS substitui o papel dele

Por fim temos o link do quia que foi utilizado para **O Cara** dar está última aula, [Notion](https://www.notion.so/Aula-04-8099fd5e53184ff5b5afb439238afc76)

>04/02/2021
