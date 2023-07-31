// a. Se a pessoa não tiver pets, a mensagem deve ser: Sou João e não tenho pets.

// b. Se a pessoa tiver mais de um pet, a mensagem deve ser: Sou Ana e tenho 2 pets.

// c. Se a pessoa tiver um pet, a mensagem deve ser: Sou Beatriz e tenho 1 pet.

const usuarios = [
  {
    nome: "João",
    pets: [],
  },
  {
    nome: "Ana",
    pets: ["Pingo", "Lulu"],
  },
  {
    nome: "Beatriz",
    pets: ["Lessie"],
  },
  {
    nome: "Carlos",
    pets: ["Farofa", "Salsicha", "Batata"],
  },
  {
    nome: "Antonio",
    pets: ["Naninha"],
  },
];

for (let usuario of usuarios) {
  const { nome } = usuario;
  const { pets } = usuario;

  console.log(`Sou ${nome} e ${pets.length >= 2 ? `tenho ${pets.length} pets.` : pets.length == 1 ? `tenho ${pets.length} pet.` : 'nao tenho pets.'}`);
  
};
