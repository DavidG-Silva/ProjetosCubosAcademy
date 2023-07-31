function removePontuacao(valor) {
    while (
        valor.includes('.') ||
        valor.includes('-') ||
        valor.includes('/')
    ) {
        valor = valor.replace('.', '');
        valor = valor.replace('-', '');
        valor = valor.replace('/', '');
    };

    return valor;

}

const cpf = "011.022.033-44";
const cnpj = '81.952.310/0001-44';

console.log(removePontuacao(cpf));
console.log(removePontuacao(cnpj));
