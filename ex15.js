
function Fibo(n) {
    let a = 0, b = 1;
    console.log("Sequência de Fibonacci:");
    for (let i = 0; i < n; i++) {
        console.log(a);
        const proximo = a + b;
        a = b;
        b = proximo;
    }
}


Fibo(10);