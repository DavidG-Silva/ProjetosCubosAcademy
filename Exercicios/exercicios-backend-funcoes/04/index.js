
const contaBancaria = {
    nome: 'Maria',
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        if (typeof valor !== 'number' || valor <= 0) {
            return 'O valor para deposito deve ser maior que zero!'
        };

        this.saldo += valor;
        this.historicos.push(
            {
                tipo: 'Deposito',
                valor
            }
        );

        return `Deposito de R$ ${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}`;
    },
    sacar: function (valor) {
        if (typeof valor !== 'number' || valor <= 0) {
            return 'O valor para saque deve ser maior que zero!'
        };

        if (this.saldo < valor) {
            return `Saldo insuficiente para o saque de: ${this.nome}`;
        };

        this.saldo -= valor;
        this.historicos.push(
            {
                tipo: 'Saque',
                valor
            }
        );

        return `Saque de R$ ${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}`;
    },
    extrato: function () {
        let msgHistorico = '';

        for (const operacao of this.historicos) {
            msgHistorico += `${operacao.tipo} de ${(operacao.valor / 100).toFixed(2)}\n`;
        };

        return `Extrato de ${this.nome} - Saldo: R$ ${(this.saldo / 100).toFixed(2)}\n` +
            `Historico:\n` +
            `${msgHistorico}`;
    }
}

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());

