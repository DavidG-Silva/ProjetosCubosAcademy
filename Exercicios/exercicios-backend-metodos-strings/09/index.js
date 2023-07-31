// O nickname deve conter, no máximo, 13 caracteres;
// Deve começar sempre com "@";
// Não deve existir espaços em branco;
// São permitidos apenas caracteres minúsculos.

function nickname (nome) {
    //deixar tudo minusculo
    let nickname = nome.toLowerCase();

    //retirar todos os espacos
    while (nickname.includes(' ')) {
        nickname = nickname.replace(' ','');
    };

    //deve comecar sempre com @ 
    nickname = '@' + nickname;

    //manter no maximo 13 caracteres
    nickname = nickname.slice(0,13);

    return nickname;
}

const nome = 'Guido Cesar';

console.log(nickname(nome));
