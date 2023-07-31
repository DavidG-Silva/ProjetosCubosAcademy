let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";


//indentificador deve ter 6 digitos, completar com zero a esquerda
identificador = identificador.padStart(6, '0');
console.log(identificador);

//nomes devem comecar com letra maiuscula
let nomeArray = nome.toLowerCase().split(' ');
let nomeFormatado = '';
for (let i = 0; i < nomeArray.length; i++) {
    nomeArray[i] = nomeArray[i][0].toUpperCase() + nomeArray[i].slice(1);
    nomeFormatado += nomeArray[i] + ' '
};
nome = nomeFormatado.trim();

console.log(nome);

//email nao pode ter espacos em branco
email = email.trim();
console.log(email);
