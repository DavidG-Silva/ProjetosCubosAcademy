
const stringCorrompida = '$Ailuropoda@ melanoleuca!';
const caracteres = '!@#$%&*()';
let stringPurificada = '';

for (let letra of stringCorrompida) {
    if (!caracteres.includes(letra)) {
        stringPurificada += letra;
    }
}

console.log(stringCorrompida);
console.log(stringPurificada);
