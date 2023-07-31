

//tem ddd, NAO tem 9 = 10 dig.
//tem ddd, tem 9 = 11 dig.

//nao tem ddd, NAO tem 9 = 8 dig.
//nao tem ddd, tem 9 = 9 dig.

function formataCelularSemDDD(numeroCelular) {
    let celularString = String(numeroCelular);
    let celularFormatado = '';

    //deixar assim 9 9991-8888
    celularString = celularString.slice(-8);              //separa o telefone
    celularString = celularString.padStart(9, '9');
    celularFormatado += celularString.slice(0, 1) + ' ';
    celularFormatado += celularString.slice(1, 5) + '-';
    celularFormatado += celularString.slice(-4);

    return celularFormatado;

}

function formataCelularQualquerPadrao(numeroCelular) {
    let celularString = String(numeroCelular);
    let dddString = '';
    
    if (celularString.length > 9) {     //tem ddd
        //deixar assim (71) 9 9991-8888
        dddString = '(' + celularString.slice(0, 2) + ')';                  //separa o ddd
        
        return dddString + ' ' + formataCelularSemDDD(numeroCelular);

    } else {        //NAO tem ddd
        //deixar assim 9 9991-8888
        return formataCelularSemDDD(numeroCelular);

    };
}

const celular = 7199918888;

console.log(formataCelularQualquerPadrao(celular));
