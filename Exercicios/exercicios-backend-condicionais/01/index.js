const jogada1 = "pedra"
const jogada2 = "tesoura"

//seu código aqui
if (jogada1 === jogada2) {
    console.log('EMPATE');
} else if (jogada1 === 'pedra' && jogada2 === 'tesoura' || jogada1 === 'tesoura' && jogada2 === 'pedra') {
    console.log('PEDRA GANHA', (jogada1 === 'pedra' ? 'jogada 1' : 'jogada2'));
} else if (jogada1 === 'pedra' && jogada2 === 'papel' || jogada1 === 'papel' && jogada2 === 'pedra') {
    console.log('PAPEL GANHA', (jogada1 === 'papel' ? 'jogada 1' : 'jogada2'));
} else if (jogada1 === 'tesoura' && jogada2 === 'papel' || jogada1 === 'papel' && jogada2 === 'tesoura') {
    console.log('TESOURA GANHA', (jogada1 === 'tesoura' ? 'jogada 1' : 'jogada2'));
} else {
    console.log('INFORME UMA OPCAO VALIDA');
}

