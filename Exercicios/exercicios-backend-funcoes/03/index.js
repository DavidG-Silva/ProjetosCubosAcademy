// function imprimirResumoDoCarrinho(carrinho) {
//     const { nomeDoCliente } = carrinho;
//     const { produtos } = carrinho;
//     let totalItens = 0;
//     let totalPagar = 0;

//     totalItens = produtos.length;

//     for (const item of produtos) {
//         totalPagar += item.precoUnit;
//     }

//     console.log(`Cliente: ${nomeDoCliente}`);
//     console.log(`Total de itens: ${totalItens}`);
//     console.log(`Total a pagar: R$ ${(totalPagar / 100).toFixed(2)}`);
// }

// function addProdutoAoCarrinho(carrinho, produto) {
//     const { produtos } = carrinho;
//     let produtoRepetido = false;

//     for (const item of produtos) {
//         if (item.id === produto.id) {
//             item.qtd += produto.qtd;
//             produtoRepetido = true;
//         }
//     }

//     if (!produtoRepetido) {
//         produtos.push(produto);
//     }
// }

const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000,
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000,
        }
    ],
    addProduto: function (produto) {
        const { produtos } = this;
        let produtoRepetido = false;

        for (const item of produtos) {
            if (item.id === produto.id) {
                item.qtd += produto.qtd;
                produtoRepetido = true;
            }
        }

        if (!produtoRepetido) {
            produtos.push(produto);
        }
    },
    calcularTotalDeItens: function () {
        const { produtos } = this;
        let totalItens = 0;

        for (const item of produtos) {
            totalItens += item.qtd;
        };

        return totalItens;
    },
    calcularTotalAPagar: function () {
        const { produtos } = this;
        let totalPagar = 0;

        for (const item of produtos) {
            totalPagar += item.precoUnit * item.qtd;
        }

        return totalPagar;
    },
    imprimirResumo: function () {
        const { nomeDoCliente } = this;

        console.log(`Cliente: ${nomeDoCliente}`);
        console.log(`Total de itens: ${this.calcularTotalDeItens()}`);
        console.log(`Total a pagar: R$ ${(this.calcularTotalAPagar() / 100).toFixed(2)}`);
    },
    imprimirDetalhes: function () {
        const { nomeDoCliente } = this;
        const { produtos } = this;
        let subTotal = 0;

        console.log(`Cliente: ${nomeDoCliente}`);

        for (let i = 0; i < produtos.length; i++) {
            subTotal = produtos[i].precoUnit * produtos[i].qtd
            console.log(`Item ${i + 1} - ${produtos[i].nome} - ${produtos[i].qtd} und - R$ ${(subTotal / 100).toFixed(2)}`);
        };

        console.log(`Total de itens: ${this.calcularTotalDeItens()}`);
        console.log(`Total a pagar: R$ ${(this.calcularTotalAPagar() / 100).toFixed(2)}`);

    },
    calcularDesconto: function () {
        const { produtos } = this;
        let desconto = 0;
        let menorValor = produtos[0].precoUnit;
        let dezPorCentoDoTotal = 0;



        if (this.calcularTotalDeItens() > 4) {
            for (const item of produtos) {
                if (item.precoUnit < menorValor) {
                    menorValor = item.precoUnit;
                }
            };
        };

        if (this.calcularTotalAPagar() > 10000) {
            dezPorCentoDoTotal = this.calcularTotalAPagar() / 10;
        };

        if (menorValor > dezPorCentoDoTotal) {
            desconto = menorValor;
        } else {
            desconto = dezPorCentoDoTotal;
        };

        return desconto;
    }
};

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
};

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
};

carrinho.addProduto(novaBermuda);
carrinho.addProduto(novoTenis);

carrinho.imprimirDetalhes();
console.log('Desconto de R$ ',(carrinho.calcularDesconto()/100).toFixed(2));

// carrinho.imprimirResumo();
// carrinho.imprimirDetalhes();
