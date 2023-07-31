function validaCPF (cpf) {
    let cpfFormatado = '';

    if (cpf.length === 11) {
        //se o CPF for valido, tamanho igual a 11 digitos
        cpfFormatado += cpf.slice(0,3) + '.';
        cpfFormatado += cpf.slice(3,6) + '.';
        cpfFormatado += cpf.slice(6,9) + '-';
        cpfFormatado += cpf.slice(-2);

        console.log(cpfFormatado);        
    } else {
        //se o CPF for diferente de 11 digitos
        console.log('CPF Invalido!!');
    };

}

function validaCNPJ (cnpj) {
        let cnpjFormatado = '';

    if (cnpj.length === 14) {
        //se o CPF for valido, tamanho igual a 11 digitos
        cnpjFormatado += cnpj.slice(0,2) + '.';
        cnpjFormatado += cnpj.slice(2,5) + '.';
        cnpjFormatado += cnpj.slice(5,8) + '/';
        cnpjFormatado += cnpj.slice(8,12) + '-';
        cnpjFormatado += cnpj.slice(-2);

        console.log(cnpjFormatado);        
    } else {
        //se o CPF for diferente de 11 digitos
        console.log('CNPJ Invalido!!');
    };

}

const cpf = "12345678900";
const cnpj = "12345678000199";

validaCPF(cpf);
validaCNPJ(cnpj);
