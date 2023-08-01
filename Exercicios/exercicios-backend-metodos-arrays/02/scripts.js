function divideArray (lista, numero) {
    let array = lista.slice()                           //cria uma copia nao vinculada da array original
    let arrayDividido = [];

    while (array.length > numero) {                     //adiciona varios arrays ao arrayDivido
        arrayDividido.push(array.splice(0,numero));
    };
    arrayDividido.push(array.splice(0,numero));         //adiciona o ultimo array ao arrayDivido

    for (let item of arrayDividido) {                   //itera em arrayDividido, imprimindo uma mensagem para cada item
        console.log(`Grupo ${arrayDividido.indexOf(item) + 1}: ${item.join(', ')}.`)
    };
}

const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

divideArray(nomes, tamanhoDoGrupo);

console.log(nomes);
