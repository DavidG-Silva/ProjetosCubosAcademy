function retorna3Carros (arrayCarros, indice = 0) {         //caso nao seja informado a posicao de inicio, sera 0
        
    console.log(arrayCarros.slice(indice, indice + 3).join(' - '));

}

const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 2;

retorna3Carros(nomes, posicao);
