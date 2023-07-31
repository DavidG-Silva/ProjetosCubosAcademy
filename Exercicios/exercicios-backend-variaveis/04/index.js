
let capital;
let taxaJuros;
let periodoTempo;
let montante;

capital = 1000;
taxaJuros = 0.125;
periodoTempo = 5;

montante = capital * ((1 + taxaJuros) ** periodoTempo);

console.log(`Um capital R$ ${capital.toFixed(2)} aplicado por ${periodoTempo} meses no sistema 
de juros compostos, à taxa de ${taxaJuros * 100}% de juros mensais, 
resultará no montante de R$ ${montante.toFixed(2)}!`);
