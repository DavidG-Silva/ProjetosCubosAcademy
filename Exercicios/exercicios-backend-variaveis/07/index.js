
let popInicialInfec = 1000; // populacao inicial de infectados
let taxaTransmissao = 4; // quantidade de pessoas para as quais um infectado pode transmitir
let tempo = 7; // tempo percorrido em dias

let totalInfectados; // quantidade de pessoas infectadas apos decorrido o tempo

totalInfectados = popInicialInfec * (taxaTransmissao ** (tempo / 7));

console.log(`Após ${tempo} dias, havera ${totalInfectados} pessoas infectadas, uma vez que 
inicialmente a populacao doente era de ${popInicialInfec} pessoas!`);
