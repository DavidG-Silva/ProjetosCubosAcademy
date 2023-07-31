const caractere = "a";

if (caractere === '0' || caractere === '1' || caractere === '2' || caractere === '3' ||
    caractere === '4' || caractere === '5' || caractere === '6' || caractere === '7' ||
    caractere === '8' || caractere === '9') {
    console.log('Numero');
} else if (caractere === 'A' || caractere === 'E' || caractere === 'I' ||
    caractere === 'O' || caractere === 'U') {
    console.log('VOGAL MAIUSCULA');
} else if (caractere === 'a' || caractere === 'e' || caractere === 'i' ||
    caractere === 'o' || caractere === 'u') {
    console.log('Vogal minuscula');
} else {
    console.log('Consoante');
}
