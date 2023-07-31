const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

//seu codigo aqui

//for of
/*
for (const num of original) {
    if (num % 2 == 0) {
        pares.push(num);
    } else {
        impares.push(num);
    }
}
*/

//for de C
/*
for (let i = 0; i < original.length; i++) {
    if (original[i] % 2 == 0) {
        pares.push(original[i]);
    } else {
        impares.push(original[i]);
    }
}
*/

//while
let indexArrayOriginal = 0;
while (indexArrayOriginal < original.length) {
    if (original[indexArrayOriginal] % 2 == 0) {
        pares.push(original[indexArrayOriginal]);
    } else {
        impares.push(original[indexArrayOriginal]);
    }
    indexArrayOriginal++;
}

console.log(pares);
console.log(impares);
