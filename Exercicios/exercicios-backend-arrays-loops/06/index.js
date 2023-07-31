const numeros = [3, 7, 1, 5];

// seu codigo aqui

let somaNumeros = null;

for (const i of numeros) {
    if (i % 2 === 0) {
        somaNumeros += i;
    }
}

somaNumeros ? console.log(somaNumeros) : console.log('Nao havia nenhum numero par no array');
