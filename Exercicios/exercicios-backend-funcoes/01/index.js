const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

//seu codigo aqui

function corrigirProva (prova) {
    const {aluno} = prova;
    const {questoes} = prova;
    const {valor} = prova;
    let nota = 0;
    let acertos = 0;

    for (let questao of questoes) {
        if (questao.resposta === questao.correta) {
            acertos++;
        };
    };

    nota = (valor / questoes.length) * acertos;
    return `O aluno(a) ${aluno} acertou ${acertos} questões e obteve nota ${nota.toFixed(1)}`;
}

console.log(corrigirProva(prova));
