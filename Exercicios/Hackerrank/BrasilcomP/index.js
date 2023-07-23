
const primeiraLetra = "a";
const segundaLetra = "v";
const palavras = ["aveia", "manha", "ave"];

let nenhuma = null;

for (let palavra of palavras) {
    if (palavra[0] === primeiraLetra && palavra[1] === segundaLetra) {
        nenhuma++;
        console.log(palavra);
    }
}

if (!nenhuma) {
    console.log('NENHUMA');
}
