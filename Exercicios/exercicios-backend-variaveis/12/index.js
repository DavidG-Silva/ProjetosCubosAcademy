
let montante = 90000;
let capitalInicial = 60000;
let nroMeses = 24;
let taxaJuros;

taxaJuros = (((montante / capitalInicial) ** (1 / nroMeses))) - 1;

console.log(`O seu financiamento de R$ ${capitalInicial.toFixed(2)} teve uma taxa de juros 
de ${(taxaJuros * 100).toFixed(3)}% a.m., pois após ${nroMeses} meses você teve que pagar R$ ${montante.toFixed(2)}`);
