const nomes = ["Ana", "Joana", "Carlos", "amanda"];

//seu codigo aqui

let nomesComAa = [];

for (const nome of nomes) {
    if (nome[0] === 'A' || nome[0] === 'a') {
        nomesComAa.push(nome);
    }
}

nomesComAa.length ? console.log(nomesComAa) : console.log('Nao havia nenhum nome comecando com A ou a no array original');
