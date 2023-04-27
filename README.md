<img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png" height="50" width="50"/>

<h1 align="center">Objetivo</h1>
  <p>O inuito deste projeto foi criar um site (front-end) para uma empresa utilizando html, css e um pouco de Javascript. Ao longo de todo o projeto utilizei cores que remetessem ao negócio da empresa, além de priorizar uma navegação simples, fluída e intuitiva pensando na excelente experiência do usuário. Futuramente será necessário fazer novas atualizações interativas com JS e React, de acordo às necessidades da empresa.</p>
  <h3><b>Pontos relevantes sobre o projeto:</b></h3>
    <ul>
      <li>Responsividade com @media query;</li>
      <li>Implementação de formulário com html + css;</li>
      <li>Utilização de Javascript para criar o filtro de galeria, e alert para comunicar ao usuário que os dados foram enviados com sucesso;</li>
      <li>Utilização do bootstrap para construir o slide estilo carrousel composto por fotos dos produtos da empresa.</li>      
    </ul>
   
  <br>
  <h3 align="center">Sobre o filtro de seção</h3>
    <p>Utilizei maioritariamente DOM (Document Object Model) para fazer as interações com o html e css, sobretudo, utilizando <code>querySelector()</code>. Com essa utilização foi possível "pegar" os seletores de estilo css e atribuí-los à comandos de interatividade com js. Como podem ser evidenciados nos códigos abaixo:</p>
  
  ```
  const filterContainer = document.querySelector(".gallery-filter");
  filterContainer.querySelector(".active").classList.remove("active");
  ```
<br>

<p>Foi utilizado o método <code>forEach()</code> para percorrer o array e passar uma função de <b>callback</b> para cada elemento da mesma juntamente ao valor atual (<code>item</code>) e, logo em seguida, passada uma estrutura condicional <code>if/else</code>.</p>

<br>
<h3 align="center">Sobre o Bootstrap</h3>
  <p>Para construir o carrousel contendo imagens que remetem ao negócio, botões e texto, foi utilizado o Bootstrap. Com as suas respectivas classes do framework foi possível estruturar e estilizar, contendo todas as informações anteriormente citadas.</p>

#
<br>
<h3>Futuras implementações</h3>
✅ Melhorar o layout com CSS - Adicionar Slider com imagens que remetam ao cotidiano da empresa - com <b>Bootstrap</bold>; <br>
✅ Implementar mais interatividade com JS criando um <b>filtro de galeria</b> contendo os produtos que a empresa possui/vende; <br>
◻️ Implementar React Js.



