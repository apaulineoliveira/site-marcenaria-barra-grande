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

<h3>Futuras melhorias</h3>
✅ Melhorar o layout com CSS - Adicionar Slider com imagens que remetam ao cotidiano da empresa - com <b>Bootstrap</bold>; <br>
✅ Implementar mais interatividade com JS criando um <b>filtro de galeria</b> contendo os produtos que a empresa vende; <br>
◻️ Implementar React.
