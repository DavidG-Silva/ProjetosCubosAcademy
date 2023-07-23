const sequencia = '>>>>>>><<>';

let posicao = 0;

for (let clique of sequencia) {
    if (clique === '>') {
        if (posicao === 6) {
            posicao = 0;
        } else {
            posicao++;
        }
    } else if (clique === '<') {
        if (posicao === 0) {
            posicao = 6;
        } else {
            posicao--;
        }
    }
}

console.log(posicao);
