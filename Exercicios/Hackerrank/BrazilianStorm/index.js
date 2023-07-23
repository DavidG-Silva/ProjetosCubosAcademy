
const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];
// const notas = [100, 100, 100, 50];
// const notas = [100, 20];

let maiorNota = notas[0];
let menorNota = notas[0];
let totalNotas = 0;
let mediaFinal = 0;

if (notas.length <= 2) {
    for (let nota of notas) {
        totalNotas += nota;
        mediaFinal = totalNotas / notas.length;
    }
} else {
    for (let nota of notas) {
        totalNotas += nota;

        if (nota > maiorNota) {
            maiorNota = nota;
        }

        if (nota < menorNota) {
            menorNota = nota;
        }
    }
    mediaFinal = (totalNotas - (maiorNota + menorNota)) / (notas.length - 2);
}

console.log(mediaFinal);
