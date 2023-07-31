const alturaEmCm = 185;

//seu código aqui

if (alturaEmCm > 205) {
    console.log('CENTRAL');
} else if (alturaEmCm >= 196) {
    console.log('OPOSTO');
} else if (alturaEmCm >= 186) {
    console.log('PONTEIRO');
} else if (alturaEmCm >= 180) {
    console.log('LÍBERO');
} else {
    console.log('REPROVADO');
}
