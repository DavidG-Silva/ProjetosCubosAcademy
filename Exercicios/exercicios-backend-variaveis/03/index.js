
let meuDinheiro = 80; 
let valorTenis = 129.99;

let valorDesconto = valorTenis - meuDinheiro;
let percentualDesconto = (valorDesconto / valorTenis) * 100;

console.log(`O percentual de desconto que preciso receber é: ${percentualDesconto.toFixed(2)}%`);
