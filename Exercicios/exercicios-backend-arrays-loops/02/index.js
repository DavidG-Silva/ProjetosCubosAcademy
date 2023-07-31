const letras = ["A", "a", "B", "C", "A", "E", "e"];

// seu codigo aqui

somaLetrasE = 0;

for (let i of letras) {
    if (i === 'E' || i === 'e') {
        somaLetrasE++;
    } 
}

if (somaLetrasE === 0) {
    console.log('Nenhuma letra "E" ou "e" foi encontrada.');
} else if (somaLetrasE > 1){
    console.log(`Foram encontradas ${somaLetrasE} letras "E" ou "e".`);
} else{
    console.log(`Foi encontrada ${somaLetrasE} letra "E" ou "e".`);
}