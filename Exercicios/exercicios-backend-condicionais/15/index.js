const primeiroNome = "Mario";
const sobrenome = "";
const apelido = "";

// seu codigo aqui

if (primeiroNome) {
    if (apelido) {
        console.log(apelido);
    } else if (sobrenome) {
        console.log(primeiroNome, sobrenome);
    } else {
        console.log(primeiroNome);
    }
} else {
    console.log('Informe seu primeiro nome!');
}
