//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 2;

// seu codigo aqui

if (quantidadeDeAguaIngerida > 3) {
    console.log('Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!');
} else if (quantidadeDeAguaIngerida >= 1.5) {
    console.log('Risco Moderado - Você está ingerindo pouca água, beba mais!');
} else {
    console.log('Risco Alto - Você está ingerindo pouquissima água, beba mais água!');
}
