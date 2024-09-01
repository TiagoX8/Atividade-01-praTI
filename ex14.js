const prompt = require('prompt-sync')();


const numero = parseInt(prompt("Digite um número inteiro não negativo para calcular o fatorial: "), 10);


function calcularFatorial(n) {
    if (n < 0) {
        return "Número inválido. O fatorial não é definido para números negativos.";
    }
    let fatorial = 1;
    for (let i = 1; i <= n; i++) {
        fatorial *= i;
    }
    return fatorial;
}


const resultado = calcularFatorial(numero);


console.log(`O fatorial de ${numero} é: ${resultado}`);