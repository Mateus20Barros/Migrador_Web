const inputsenha = document.querySelector(".senha");
const divsenha = document.querySelector(".ver_senha");
const btnsenha = document.querySelector(".btn_senha");
const icone = document.querySelector("#icone");

// Adiciona cor quando o input está com foco
inputsenha.addEventListener("focus", () => {
    divsenha.style.backgroundColor = "#505e83"; 
});

// Remove a cor de fundo quando o input perde o foco
inputsenha.addEventListener("blur", () => {
    divsenha.style.backgroundColor = ""; 
});

// visualizar senha 
icone.addEventListener("click", () => {
    inputsenha.type == "password" 
        ? inputsenha.type = "text"
        : inputsenha.type = "password";
    
    icone.classList.toggle("fa-eye");
    icone.classList.toggle("fa-eye-slash")
})
