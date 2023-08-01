const buscaPets = (nomePet, listaDonos) => {
    let donos = [];

    for (let i of listaDonos) {
        if (i.pets.includes(nomePet)) {
            donos.push(i.nome);
        }
    };

    if (donos.length > 1) {
        console.log(`Os(as) donos(as) do(a) ${nomePet} podem ser: ${donos.join(' ou ')}.`);
    } else if (donos.length === 1) {
        console.log(`O(a) dono(a) do(a) ${nomePet} é o(a) ${donos}.`)
    } else {
        console.log(`Que pena ${nomePet}, não encontramos seu(sua) dono(a).`)
    };
}

const usuarios = [
    {
        nome: "João",
        pets: ["Max"]
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"]
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"]
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"]
    },
    {
        nome: "Antonio",
        pets: ["Naninha", "Max"]
    }
];

const pet1 = 'Lulu';
const pet2 = 'Bambi'
const pet3 = 'Max'

buscaPets(pet1, usuarios);
buscaPets(pet2, usuarios);
buscaPets(pet3, usuarios);
