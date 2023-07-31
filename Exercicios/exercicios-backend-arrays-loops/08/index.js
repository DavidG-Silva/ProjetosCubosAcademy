// const numeros = [3, 24, 1, 8, 11, 7, 15];
const numeros = [-21, 'teste', 0];

//seu codigo aqui

let maiorNumero;

for (const item of numeros) {
    if (maiorNumero == null && typeof(item) === 'number') {
        maiorNumero = item;
    } else if (item > maiorNumero) {
        maiorNumero = item;
    }
}

!(maiorNumero == null) ? console.log(maiorNumero) : console.log('Nao havia numeros no array original.');


