const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 300000; //emCentavos

//seu código aqui

if (aposentada || portadoraDeDoenca) {
    console.log('ISENTA');
} else if (totalDeRendimentos <= 2855970){
    console.log('VAZA LEAO! JA TA DIFICIL SEM VOCE');
} else {
    console.log('PEGA LEAO');
}
