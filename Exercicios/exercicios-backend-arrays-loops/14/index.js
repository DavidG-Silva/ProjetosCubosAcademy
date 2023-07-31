const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

//seu codigo aqui

for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] <= arrayB[i]) {
        console.log(arrayA[i]);
    } else {
        console.log(arrayB[i]);
    }
}

// for (let j = 0; j < arrayB.length; j++) {
//     console.log(Math.min(arrayA[j], arrayB[j]));
// }
