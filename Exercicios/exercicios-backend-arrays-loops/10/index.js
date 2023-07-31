const numeros = [8, 11, 4, 1];

// seu codigo aqui

let maiorNumero = null;
let menorNumero = null;
let maiorDiferenca = null;

for (const item of numeros) {
    if (maiorNumero == null && typeof (item) == 'number') {
        maiorNumero = item;
    } else if (item > maiorNumero) {
        maiorNumero = item;
    }

    if (menorNumero == null && typeof (item) == 'number') {
        menorNumero = item;
    } else if (item < menorNumero) {
        menorNumero = item;
    }
}

if (!(maiorNumero == null) || !(menorNumero == null)) {
    maiorDiferenca = maiorNumero - menorNumero;
}

!(maiorDiferenca == null) ? console.log(maiorDiferenca) : console.log('Nao havia numeros no array original.');
