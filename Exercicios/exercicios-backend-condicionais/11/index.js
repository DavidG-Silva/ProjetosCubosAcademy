//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 200000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 60;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, 
// o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1800000;

// seu codigo aqui

let valorParcelaEmCentavos = 0;
let totalRestante = 1800000 - totalJaPagoPeloAluno;

if (totalJaPagoPeloAluno >= 1800000) {
    console.log(`O valor da parcela desse mês é R$ ${valorParcelaEmCentavos} reais. Nenhum valor é devido 
    pois o estudante já quitou a dívida.`);
} else if (mesesDecorridos > 60) {
    console.log(`O valor da parcela desse mês é R$ ${valorParcelaEmCentavos} reais. Nenhum valor é devido 
    pois já se passaram mais de 60 meses.`);
} else if (rendaMensalEmCentavos < 200000) {
    console.log(`O valor da parcela desse mês é R$ ${valorParcelaEmCentavos} reais. Nenhum valor é devido 
    pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`);
} else {
    valorParcelaEmCentavos = rendaMensalEmCentavos * 0.18;
    if (valorParcelaEmCentavos > (totalRestante)) {
        console.log(`O valor da parcela desse mês é R$ ${(totalRestante / 100).toFixed(2)} reais, pois é o valor 
        restante para quitar o curso.`);
    } else {
        console.log(`O valor da parcela desse mês é R$ ${(valorParcelaEmCentavos / 100).toFixed(2)} reais, e o
        o valor restante para quitar o curso é ${(totalRestante / 100).toFixed(2)} reais.`);
    }
}
