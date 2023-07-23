// const precos = [100, 500, 100, 200, 50]
const precos = [100, 100, 100, 50]

let total = 0;
let menorPreco = 0;

for (let item of precos) {
    total += item;
    if (!menorPreco) {
        menorPreco = item;
    } else if (item < menorPreco) {
        menorPreco = item;
    }
}

if (precos.length >= 5) {
    console.log(total - menorPreco);
} else {
    console.log(total);
}
