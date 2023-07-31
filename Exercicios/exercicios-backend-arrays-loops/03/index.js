const numeros = [54, 22, 14, 87, 10, 284, 10];

//seu codigo aqui

let indice10 = -1;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 10) {
        indice10 = i;
        break;
    }
}
console.log(indice10);

