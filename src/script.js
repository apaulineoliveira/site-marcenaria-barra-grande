function Enviar() {
    var nome = document.getElementById("nome");
    
    if (nome.value != "") {
        alert('Obrigado, '  + nome.value +  ' seu projeto foi encaminhado para a nossa equipe com sucesso!');     
    }
}