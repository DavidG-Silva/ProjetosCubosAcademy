// function solucao(letra, palavras) {
// 	//seu codigo aqui

// }

const letra = 'm';
const palavras = ["mamao", "maca", "melao", "melancia", "laranja"];

let perdedoras = 0;

for (let item of palavras) {
    if (item[0] !== letra) {
        perdedoras++;
    }
}

console.log(perdedoras);
