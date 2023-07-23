
const palpite = 'a';
const palavra = 'abelha';

let acertos = 0;

for (let letra of palavra) {
    if (letra === palpite) {
        acertos++;
    }
}

console.log(acertos);
