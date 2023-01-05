#  🎯 Objetivo
<p>O inuito desse projeto foi criar um site (front-end) para uma empresa utilizando HTML + CSS puro e um pouco de Javascript. Ao longo de todo o projeto utilizei cores que remetessem ao negócio da empresa além de priorizar uma navegação simples, fluída e intuitiva, pensando na excelente experiência do usuário. Futuramente pretendo fazer novas atualizações interativas com JS e React.</p>
<h3><b>Pontos relevantes sobre o projeto:</b></h3>
<li>Responsividade com @media query</li>
<li>Utilização de formulário com HTML + CSS Puro</li>
<li>Utilização de Javascript para criar o filtro de galeria</li>
<li>Utilização do bootstrap para construir o slide</li>
<li>Utilização simples do Javascript (com alert) para comunicar ao usuário que os dados foram enviados com sucesso</li>

<h3>Sobre o filtro de galeria </h3>
<li>Utilizei maioritariamente DOM (Document Object Model) para fazer as interações com o HTML e CSS, sobretudo, utilizando <code>querySelector()</code>.</li>
<li>Com a utilização do <code>querySelector()</code> foi possível "pegar" os seletores de estilo CSS e atribuí-los a comandos de interatividade com javascript. Como podem ser evidenciados nos códigos:<br></br>
  <code>const filterContainer = document.querySelector(".gallery-filter")</code> <br></br>
  <code>filterContainer.querySelector(".active").classList.remove("active");</code><br></br></li>
<li>Foi utilizado o método <code>forEach()</code> para percorrer o array e passar uma função de callback para cada elemento da mesma, juntamente ao valor atual (item) e logo em seguida, passada uma estrutura condicional <code>if/else</code>.</li>
<h3>Sobre o Bootstrap</h3>
<li>Para construir o slide contendo imagens que remetem ao negócio, botões e texto, foi utilizado o Bootstrap. Com as suas respectivas classes do framework foi possível estruturar o carousel, contendo todas as informações anteriormente citadas.</li>

<h3>Futuras melhorias</h3>
✅ Melhorar o layout com CSS - Adicionar Slider com imagens que remetam ao cotidiano da empresa - com <b>Bootstrap</bold>; <br>
✅ Implementar mais interatividade com JS criando um <b>filtro de galeria</b> contendo os produtos que a empresa vende; <br>
◻️ Implementar React Js.


<h1>In English</h1>
# 🎯 Objective
<p>The goal of this project was to create a website (front-end) for a company using pure HTML + CSS and a little bit of Javascript. Throughout the entire project, I used cores that referred to the company's business, in addition to prioritizing simple, fluid and intuitive navigation, thinking about the excellent user experience. In the future I intend to make new interactive updates with JS and React.</p>
<h3><b>Relevant points about the project:</b></h3>
<li>Responsiveness with @media query</li>
<li>Using a form with pure HTML + CSS</li>
<li>Using Javascript to create the gallery filter</li>
<li>Using bootstrap to build the slide</li>
<li>Simple use of Javascript (with alert) to inform the user that the data was successfully sent</li>

<h3>About the gallery filter</h3>
<li>I mostly used DOM (Document Object Model) to do the reflections with HTML and CSS, mainly using <code>querySelector()</code>.</li>
<li>By using <code>querySelector()</code> it was possible to "take" CSS style selectors and assign them to interactivity commands with javascript. As can be evidenced in the codes:<br></br>
    <code>const filterContainer = document.querySelector(".gallery-filter")</code> <br></br>
    <code>filterContainer.querySelector(".active").classList.remove("active");</code><br></br></li>
<li>The <code>forEach()</code> method was used to traverse the array and pass a callback function for each element of the same, together with the current value (item) and soon after, a conditional structure was passed <code>if/else</code>.</li>
<h3>About Bootstrap</h3>
<li>To build the slide containing images that refer to the business, buttons and text, Bootstrap was used. With their respective framework classes, it was possible to structure the carousel, containing all the information mentioned above.</li>

<h3>Future Improvements</h3>
✅ Improve the layout with CSS - Add Slider with images that refer to the company's daily life - with <b>Bootstrap</bold>; <br>
✅ Implement more interactivity with JS by creating a <b>gallery filter</b> containing the products that the company sells; <br>
◻️ Implement React Js.
