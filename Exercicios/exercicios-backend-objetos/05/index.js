
const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
}

const {aulas} = curso; //desestruturando o objeto cursos, na propriedade aulas


console.log(aulas); //cursos.aulas e um vetor vazio, entao a variavel aulas deve imprimir um vetor vazio

//usando o metodo push, pois a variavel aulas e constante
aulas.push( 
    {
        identificador: 1,
        nomeDaAula: 'Introdução a programação'
    },

    {
        identificador: 2,
        nomeDaAula: 'Variáveis'
    },

    {
        identificador: 3,
        nomeDaAula: 'Condicionais'
    },

    {
        identificador: 4,
        nomeDaAula: 'Arrays'
    }
);

console.log(aulas); //apos usar o metodo push, foram incluidas todas as aulas como objetos

curso.aulas = aulas; //a propriedade aulas recebe o conteudo da variavel aulas 

console.log(curso);
