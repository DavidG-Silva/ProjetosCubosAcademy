
const resultados = ["V", "E", "V", "E"];

let pontos = 0;

for (let res of resultados) {
    if (res === 'V') {
        pontos += 3;
    } else if (res === 'E') {
        pontos += 1;
    }
}

console.log(pontos);

