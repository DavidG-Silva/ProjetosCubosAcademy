//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "cheque";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

// seu codigo aqui

let valorFinal;
let valorDoDesconto;

if (tipoDePagamento === 'credito') {
    valorDoDesconto = 5;
    valorFinal = valorDoProduto - (valorDoProduto * (valorDoDesconto / 100));
    console.log(`Valor a ser pago: R$ ${(valorFinal / 100).toFixed(2)}`);
} else if (tipoDePagamento === 'cheque') {
    valorDoDesconto = 3;
    valorFinal = valorDoProduto - (valorDoProduto * (valorDoDesconto / 100));
    console.log(`Valor a ser pago: R$ ${(valorFinal / 100).toFixed(2)}`);
} else if (tipoDePagamento === 'debito' || tipoDePagamento === 'dinheiro') {
    valorDoDesconto = 10;
    valorFinal = valorDoProduto - (valorDoProduto * (valorDoDesconto / 100));
    console.log(`Valor a ser pago: R$ ${(valorFinal / 100).toFixed(2)}`);
} else {
    console.log('Informe um tipo de pagamento valido.');
}
