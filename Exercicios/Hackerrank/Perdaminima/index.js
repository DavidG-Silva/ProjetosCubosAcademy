
//varrer todas as possibilidade de compra e venda
//ver, para cada uma, se é prejuizo
//se for prejuizo, anotar esse valor
//ver qual foi o menor prejuizo

const precos = [30, 10, 54, 76, 1, 4, 35];

let menorPrejuizo = null;   //pode-se iniciar essa variavel com um valor bem alto, 999999999999, para depois avaliar qual menor prejuizo

for (let compra = 0; compra < precos.length; compra++) {
    for (let venda = compra + 1; venda < precos.length; venda++) {
        if (precos[compra] > precos[venda]) {
            const prejuizo = precos[compra] - precos[venda];
            if (menorPrejuizo === null || prejuizo < menorPrejuizo) {
                menorPrejuizo = prejuizo;
            }
        }
    }
}

console.log(menorPrejuizo);
