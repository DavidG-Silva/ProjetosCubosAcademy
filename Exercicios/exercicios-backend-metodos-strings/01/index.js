const comentario = "Esse COVID é muito perigoso!";
const palavrasProibidas = ['pandemia', 'covid', 'Perigoso'];
let bloqueado = false;

for (const palavra of palavrasProibidas) {
    if (comentario.toLowerCase().includes(palavra.toLowerCase())) {
        bloqueado = true;
        break;
    }
};

if (bloqueado) {
    //se constar alguma palavra proibida, bloqueado sera VERDADEIRO
    console.log('Comentario bloqueado por conter palavras proibidas.');
} else {
    //se nao tiver nenhuma palavra proibida, bloqueado sera FALSO
    console.log('Comentario autorizado.');
};
