// const filaDeDentro = ["Jose", "Maria", "Joao"];
// const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

const filaDeDentro = ["Jose", "Joao"];
const filaDeFora = ["Joana", "Roberta"];

//seu codigo aqui

while (filaDeDentro.length < 5 && filaDeFora.length) {
    filaDeDentro.push(filaDeFora.shift());
}

console.log(filaDeDentro);
console.log(filaDeFora);
