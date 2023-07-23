// const disparos = [0, 50, 90, 80, 100, 80, 40];
const disparos = [0, 10, 50, 70, 80, 30];

let contador = 0;

for (let pontos of disparos) {
    if (pontos >= 70) {
        contador++;
    }
}

if (contador >= 3) {
    console.log(contador);
} else {
    console.log('ELIMINADO');
}
