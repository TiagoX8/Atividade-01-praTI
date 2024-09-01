const prompt = require('prompt-sync')();

const peso = parseFloat(prompt("Digite seu peso em kg: "));
const altura = parseFloat(prompt("Digite sua altura em metros: "));


const imc = peso / (altura * altura);


console.log(`Seu IMC é: ${imc.toFixed(2)}`);

if (imc < 18.5) {
    console.log("Categoria: Baixo peso");
} else if (imc >= 18.5 && imc < 24.9) {
    console.log("Categoria: Peso normal");
} else if (imc >= 25 && imc < 29.9) {
    console.log("Categoria: Sobrepeso");
} else if (imc >= 30) {
    console.log("Categoria: Obesidade");
} else {
    console.log("Dados inválidos. Por favor, verifique os valores inseridos.");
}