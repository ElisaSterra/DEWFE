const senha = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");
const btnMostrarOcultar = document.getElementById("btnMostrarOcultar");

const estudante = document.getElementById("estudante");
const dadosEstudante = document.getElementById("dadosEstudante");

senha.addEventListener("input", function () {

    if (senha.value.length === 0) {
        mensagem.style.display = "none";
    }
    else if (senha.value.length < 8) {
        mensagem.style.display = "block";
        mensagem.textContent = "Senha deve ter pelo menos 8 caracteres";
        mensagem.style.color = "red";
    }
    else {
        mensagem.style.display = "block";
        mensagem.textContent = "Senha válida";
        mensagem.style.color = "green";
    }

});

btnMostrarOcultar.addEventListener("click", function () {

    if (senha.type === "text") {
        senha.type = "password";
    } else {
        senha.type = "text";
    }

});

estudante.addEventListener("change", function () {

    if (estudante.checked) {
        dadosEstudante.hidden = false;
    } else {
        dadosEstudante.hidden = true;
    }

});