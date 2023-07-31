const original = [1, 4, 12, 21, 53, 88, 112];

// seu codigo aqui

let par = [];
for (const num of original) {
    if (num % 2 === 0) {
        par.push(num);
    }
}

if (par.length) {
    console.log(par);
} else {
    console.log('Nao havia nenhum numero par no array original');
}
