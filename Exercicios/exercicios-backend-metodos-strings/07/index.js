
function validaEmail(email) {
    if (
        email.includes('@') &&          //sempre tem que ter @
        email.includes('.') &&          //sempre tem que ter pelo menos um ponto (.)
        email.slice(0, 1) !== '.' &&     //nunca pode comecar com ponto (.)
        email.slice(-1) !== '.'         //nunca pode terminar com ponto (.)
    ) {
        //se tudo certo
        return 'E-mail valido.';

    } else {
        //se algum erro
        return 'E-mail invalido!'
    };
}

const email = "aluno@cubos.academy";

const exemplos = [
    'jose@cubos.academy'
    , 'jose@cubos.academy.br'
    , 'jose.messias@cubos.academy'
    , 'jose.messias@cubos.io'
    , 'jose@cubos'
    , 'jose.messias@cubos'
    , 'jose.messias@.'
    , 'jose.@cubos'
    , '.@'
    , '@.'
    , 'jose.messias@cubos.'
    , '.messias@cubos.'
    , '.messias@cubos'
];

// console.log(validaEmail(email));

for (const item of exemplos) {
    console.log(`${item} : ${validaEmail(item)}`);
};
