//valor do produto comprado.
const valorDoProduto = 1100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 10000;

// seu codigo aqui

let valorParcela;
let parcelasRestantes;

if (valorPago >= valorDoProduto) {
    console.log('Nao resta nenhum valor a pagar.');
} else {
    valorParcela = valorDoProduto / quantidadeDoParcelamento;
    parcelasRestantes = quantidadeDoParcelamento - (valorPago / valorParcela);
    console.log(`Restam ${parcelasRestantes} parcelas de R$${(valorParcela/100).toFixed(2)} a pagar.`);
} 