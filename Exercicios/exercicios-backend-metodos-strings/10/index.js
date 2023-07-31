function validaArquivo(nomeArquivo, listaValida) {
    // let nomeArquivo = '';
    // let listaValida = [];
    let extensaoArquivo = '';

    extensaoArquivo = nomeArquivo.slice(nomeArquivo.lastIndexOf('.') +1);

    for (const ext of listaValida) {
        if (extensaoArquivo === ext) {
            return 'Arquivo valido.'
        }
    };

    return 'Arquivo invalido!'


}

const nomeArquivo = 'Foto da Familia.jpg';
const arquivosValidos = ['jpg', 'jpeg', 'gif', 'png'];

console.log(validaArquivo(nomeArquivo,arquivosValidos));
