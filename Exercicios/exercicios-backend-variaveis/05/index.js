
let xPontoA = 1;
let yPontoA = 1;

let xPontoB = 1;
let yPontoB = 4;

let distanciaPontoAB;

distanciaPontoAB = Math.sqrt(((xPontoB - xPontoA) ** 2 ) + ((yPontoB - yPontoA) ** 2));

console.log(`A distância entre o ponto A(${xPontoA},${yPontoA}) e o 
ponto B(${xPontoB},${yPontoB}) é igual a ${distanciaPontoAB}.`);
