
let numeroLados = 6;

let somaAngulosInternos;
let valorAngulo;

somaAngulosInternos = (numeroLados - 2) * 180;

valorAngulo = somaAngulosInternos / numeroLados;

console.log(`Para um poligono com ${numeroLados} lados iguais, a soma dos angulos 
internos é igual a ${somaAngulosInternos} graus e o valor de cada angulo é igual a ${valorAngulo.toFixed(2)} graus.`);
