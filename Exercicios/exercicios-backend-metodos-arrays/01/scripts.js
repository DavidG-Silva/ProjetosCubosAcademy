let frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

// a) Organize o array na ordem inversa e transforme em uma única string separada 
//por vírgulas de forma q seja impresso: Uva, Pêra, Abacaxi, Maçã, Banana

const frutasString = frutas.reverse().join(', ');
console.log(frutasString);

//b) Remova o primeiro e último item do array original e adicione a 
//fruta Melão ao novo array da seguinte forma: ['Maçã', 'Abacaxi', 'Pêra', 'Melão']

frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
// frutas.shift();
frutas.splice(0,1);
// frutas.pop();
// frutas.push('Melão')
frutas.splice(frutas.length-1,1,'Melão')
console.log(frutas);
