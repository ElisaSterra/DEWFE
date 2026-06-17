let display = document.getElementById("display");
let botoes = document.querySelectorAll("[data-value]");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        let valor = botoes[i].getAttribute("data-value");

        if (display.value == "0") {
            display.value = valor;
        } else {
            display.value += valor;
        }
    };
}

document.getElementById("add").onclick = function () {
    display.value += "+";
};

document.getElementById("sub").onclick = function () {
    display.value += "-";
};

document.getElementById("mult").onclick = function () {
    display.value += "*";
};

document.getElementById("div").onclick = function () {
    display.value += "/";
};

document.getElementById("calcular").onclick = function () {
    display.value = eval(display.value);
};

document.getElementById("limpar").onclick = function () {
    display.value = "0";
};