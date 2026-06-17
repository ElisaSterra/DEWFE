let numeros = [2, 5, 7, 75, 0, 49, 82, -4, 13, 6, 10];

let soma = 0;
let media = 0;
let moda;
let maiorFrequencia = 0;
let pares = [];
let impares = [];
let diferencasAoQuadrado = [];
let totalQuadrados = 0;
let variancia = 0;
let desvioPadrao = 0;

numeros.forEach(numero => {
    if (numero % 2 === 0) {
        pares.push(numero);
    } else {
        impares.push(numero);
    }
});

console.log("Números pares: " + pares);
console.log("Números ímpares: " + impares);

// Média
numeros.forEach(numero => {
    soma += numero;
});

media = soma / numeros.length;
console.log("A média é: " + media);

// Moda
for (let i = 0; i < numeros.length; i++) {
    let frequencia = 0;

    for (let j = 0; j < numeros.length; j++) {
        if (numeros[i] === numeros[j]) {
            frequencia++;
        }
    }

    if (frequencia > maiorFrequencia) {
        maiorFrequencia = frequencia;
        moda = numeros[i];
    }
}

if (maiorFrequencia > 1) {
    console.log(`Moda: ${moda} (aparece ${maiorFrequencia} vezes)`);
} else {
    console.log("A moda não existe.");
}

// Mediana
let numerosOrdenados = [...numeros].sort((a, b) => a - b);

if (numerosOrdenados.length % 2 === 0) {
    let centro1 = numerosOrdenados.length / 2;
    let centro2 = centro1 - 1;

    let mediana = (numerosOrdenados[centro1] + numerosOrdenados[centro2]) / 2;
    console.log("A mediana é: " + mediana);
} else {
    let centro = Math.floor(numerosOrdenados.length / 2);
    console.log("A mediana é: " + numerosOrdenados[centro]);
}

// Desvio padrão
numeros.forEach(numero => {
    diferencasAoQuadrado.push((numero - media) ** 2);
});

diferencasAoQuadrado.forEach(valor => {
    totalQuadrados += valor;
});

variancia = totalQuadrados / numeros.length;
desvioPadrao = Math.sqrt(variancia);

console.log("O desvio padrão é: " + desvioPadrao);