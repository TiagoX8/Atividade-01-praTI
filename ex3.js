const prompt = require('prompt-sync')();


const nota = parseFloat(prompt("Digite a nota (de 0 a 10): "));


if (nota >= 0 && nota <= 10) {
    if (nota >= 7) {
        console.log("Aprovado");
    } else if (nota >= 5) {
        console.log("Recuperação");
    } else {
        console.log("Reprovado");
    }
} else {
    console.log("Nota inválida. Por favor, digite uma nota de 0 a 10.");
}