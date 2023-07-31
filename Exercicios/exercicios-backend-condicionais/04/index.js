const ladoA = 6;
const ladoB = 7;

//seu código aqui
const bucha0 = 'Branco';
const bucha1 = 'Ás';
const bucha2 = 'Duque';
const bucha3 = 'Terno';
const bucha4 = 'Quadra';
const bucha5 = 'Quina';
const bucha6 = 'Sena';

const ladosDomino = [0, 1, 2, 3, 4, 5, 6];

// if (meuArray.includes(valorProcurado)) {
//     console.log("O valor está presente no array.");
// } else {
//     console.log("O valor não está presente no array.");
// }

// if (!(ladoA in [0, 1, 2, 3, 4, 5, 6]) || !(ladoB in [0, 1, 2, 3, 4, 5, 6])) {
//     console.log('Nao é uma peça valida');

if (!ladosDomino.includes(ladoA) || !ladosDomino.includes(ladoB)) {
    console.log('Nao é uma peça valida');
} else if (ladoA === ladoB) {
    console.log('SIM');
    console.log(`Bucha de ${eval('bucha' + ladoA)}`);
} else {
    console.log('NAO');
}
