const prompt = require('prompt-sync')();


let soma = 0;
let contador = 0;


while (true) {
    const numero = parseFloat(prompt("Digite um número decimal (ou 0 para encerrar): "));
    
    
    if (numero === 0) {
        break;
    }

    
    soma += numero;
    contador++;
}


let media = 0;
if (contador > 0) {
    media = soma / contador;
}


console.log(`A média aritmética dos números fornecidos é: ${media.toFixed(2)}`);