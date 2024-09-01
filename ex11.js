const prompt = require('prompt-sync')();


let somaTotal = 0;


for (let i = 1; i <= 5; i++) {
    const numero = parseFloat(prompt(`Digite o ${i}º número: `));
    somaTotal += numero;  
}


console.log(`A soma total dos números fornecidos é: ${somaTotal}`);