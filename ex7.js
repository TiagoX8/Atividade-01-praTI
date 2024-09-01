
const prompt = require('prompt-sync')();


const quantidade = parseInt(prompt("Digite o número de maçãs compradas: "));


let precoTotal;


if (quantidade < 12) {
    precoTotal = quantidade * 0.30;  
} else {
    precoTotal = quantidade * 0.25;  
}


console.log(`O valor total da compra é: R$ ${precoTotal.toFixed(2)}`);