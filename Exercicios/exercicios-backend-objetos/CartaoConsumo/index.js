//BASICO

produtosConsumidos = [
  {
    produtoNome: "Cerveja Breja",
    produtoPrecoUnit: 599,
    qntdeComprada: 4,
  },

  {
    produtoNome: "Batata Tata",
    produtoPrecoUnit: 4599,
    qntdeComprada: 1,
  },

  {
    produtoNome: "Caipirinha Tinha",
    produtoPrecoUnit: 1350,
    qntdeComprada: 1,
  },
];

const cartaoConsumo = {
  clienteNome: "Joao",
  clienteIdade: 30,
  produtosConsumidos,
};

//imprima o objeto cartao consumo
console.log(cartaoConsumo);

//imprima o nome do cliente
console.log(cartaoConsumo.clienteNome);

//imprima a idade do cliente
console.log(cartaoConsumo.clienteIdade);

//modifique a idade do cliente
cartaoConsumo.clienteIdade = 50;

//imprima a nova idade do cliente
console.log(cartaoConsumo.clienteIdade);

//imprima o nome do primeiro produto consumido
console.log(cartaoConsumo.produtosConsumidos[0].produtoNome);

//imprima o preco unitario do ultimo produto consumido por ele
let indiceUltimoProduto = cartaoConsumo.produtosConsumidos.length - 1;
console.log(cartaoConsumo.produtosConsumidos[indiceUltimoProduto].produtoPrecoUnit);

//imprima uma mensagem amigavel (chamando o cliente pelo nome) que informa o valor que ele deve pagar
let valorTotal = 0;
for (let produto of cartaoConsumo.produtosConsumidos) {
    valorTotal += produto.produtoPrecoUnit * produto.qntdeComprada;
}
const valorTotalFormat = (valorTotal/100).toFixed(2);
console.log(`Ola Sr(a) ${cartaoConsumo.clienteNome}! O total da sua conta e R$ ${valorTotalFormat}`)



//COMPLETO

/*
const clienteNome = 'Joao da Silva';
const clienteIdade = 30;
let totalConsumo = 0;

const cartaoConsumo = {
    clienteNome,
    clienteIdade,
    produtosConsumidos: 0,
    totalConsumo
};

console.log('A pessoa acaba de fazer cadastro');
console.log(cartaoConsumo);

const produto1 = {
    produtoNome: 'Cerveja Breja',
    produtoPreco: 5.99,
};

const produto2 = {
    produtoNome: 'Batata Tata',
    produtoPreco: 45.99
};

const produto3 = {
    produtoNome: 'Caipirinha Tinha',
    produtoPreco: 13.5
};

const produto4 = {
    produtoNome: 'Vodka Derruba',
    produtoPreco: 390
};

const produtosConsumidos = [
    consumo1 = {
        produto: produto1.produtoNome,
        valor: produto1.produtoPreco,
        qntde: 4
    },
    consumo2 = {
        produto: produto2.produtoNome,
        valor: produto2.produtoPreco,
        qntde: 1
    },
    consumo3 = {
        produto: produto4.produtoNome,
        valor: produto4.produtoPreco,
        qntde: 1
    }
];

console.log('A pessoa ainda nao fechou a conta');
console.log(cartaoConsumo);

//para fechamento, o programa deve rodar o bloco abaixo

for (let consumo of produtosConsumidos) {
    totalConsumo += consumo.valor * consumo.qntde;
};

cartaoConsumo.produtosConsumidos = produtosConsumidos;
cartaoConsumo.totalConsumo = totalConsumo;

console.log('A pessoa acaba de fechar a conta');
console.log(cartaoConsumo);
*/
