const prompt = require('prompt-sync')();


const A = parseFloat(prompt("Digite o valor do lado A: "));
const B = parseFloat(prompt("Digite o valor do lado B: "));
const C = parseFloat(prompt("Digite o valor do lado C: "));


if (A < B + C && B < A + C && C < A + B) {
    
    if (A === B && B === C) {
        console.log("Os lados fornecidos formam um triângulo Equilátero.");
    } else if (A === B || A === C || B === C) {
        console.log("Os lados fornecidos formam um triângulo Isósceles.");
    } else {
        console.log("Os lados fornecidos formam um triângulo Escaleno.");
    }
} else {
    console.log("Os valores fornecidos não formam um triângulo.");
}