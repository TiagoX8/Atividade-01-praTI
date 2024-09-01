const prompt = require('prompt-sync')();


function Menu() {
    console.log("Menu Interativo:");
    console.log("1. Opção 1: Mostrar uma mensagem");
    console.log("2. Opção 2: Calcular o quadrado de um número");
    console.log("3. Opção 3: Sair");
    const escolha = prompt("Escolha uma opção (1-3): ");
    return escolha;
}


let escolha = Menu();

switch (escolha) {
    case '1':
        console.log("Você escolheu a Opção 1: Mostrar uma mensagem.");
        console.log("Olá, esta é uma mensagem de exemplo!");
        break;
    case '2':
        console.log("Você escolheu a Opção 2: Calcular o quadrado de um número.");
        const numero = parseFloat(prompt("Digite um número: "));
        console.log(`O quadrado de ${numero} é ${numero * numero}.`);
        break;
    case '3':
        console.log("Você escolheu a Opção 3: Sair. Encerrando o programa.");
        break;
    default:
        console.log("Opção inválida. Por favor, escolha uma opção entre 1 e 3.");
        break;
}