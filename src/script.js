function Enviar() {
    var nome = document.getElementById("nome");
    
    if (nome.value != "") {
        alert('Obrigado, '  + nome.value + '!' + ' Seu projeto foi encaminhado para a nossa equipe com sucesso! Nosso time entrará em contato através do email que você nos mandou. Atenciosamente: Barra Grande Marcenaria.');     
    }
}


const filterContainer = document.querySelector(".gallery-filter"),
galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) =>{
    if(event.target.classList.contains("filter-item")){
        filterContainer.querySelector(".active").classList.remove("active");

        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter");
        galleryItems.forEach((item) =>{
            if(item.classList.contains(filterValue) || filterValue === 'all'){
                item.classList.remove("hide");
                item.classList.add("show");
            }
            else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }
});