<img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png" height="50" width="50"/>

<h1 align="center">Goal</h1>
   <p>The goal of this project was to create a website (front-end) for a company using html, css and a little Javascript. Throughout the entire project, I used colors that referred to the company's business, in addition to prioritizing simple, fluid and intuitive navigation, thinking about the excellent user experience. In the future it will be necessary to make new interactive updates with JS and React, according to the needs of the company.</p>
   <h3><b>Relevant points about the project:</b></h3>
     <ul>
       <li>Responsiveness with @media query;</li>
       <li>Form implementation with html + css;</li>
       <li>Use of Javascript to create the gallery filter, and alert to inform the user that the data was sent successfully;</li>
       <li>Use of bootstrap to build the carrousel-style slide composed of photos of the company's products.</li>
     </ul>
   
   <br>
   <h3 align="center">About the section filter</h3>
     <p>I mostly used DOM (Document Object Model) to make interactions with html and css, mainly using <code>querySelector()</code>. With this use, it was possible to "take" the css style selectors and assign them to js interactivity commands. As can be seen in the codes below:</p>
  
   ```
   const filterContainer = document.querySelector(".gallery-filter");
   filterContainer.querySelector(".active").classList.remove("active");
   ```
<br>

<p>The <code>forEach()</code> method was used to traverse the array and pass a <b>callback</b> function for each element of the array together with the current value (<code>item</b> code>) and then passed a conditional structure <code>if/else</code>.</p>

<br>
<h3 align="center">About Bootstrap</h3>
   <p>To build the carousel containing images that refer to the business, buttons and text, Bootstrap was used. With their respective classes of the framework it was possible to structure and style, containing all the information previously mentioned.</p>

#
<br>
<h3>Future implementations</h3>
<br></br>
<p>⚠️ The choice and visual layout of this project is in accordance with the requirements of the <b>client</b>.</p>
✅ Improve the layout with css - Build a carousel with images that refer to the company's daily life - with <b>Bootstrap</bold>; <br>
✅ Implement more interactivity with JS by creating a <b>gallery filter</b> containing the products that the company owns/sells; <br>
◻️ Features with React Js.