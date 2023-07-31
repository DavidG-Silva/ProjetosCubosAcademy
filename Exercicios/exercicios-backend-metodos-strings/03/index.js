const texto = "Aprenda programar do zero na Cubos Academy";

let urlAmigavel = texto.toLowerCase();

// urlAmigavel = urlAmigavel.replace(/ /g,'-'); //usando str.replace() com regex

while (urlAmigavel !== urlAmigavel.replace(' ','-')) {
    urlAmigavel = urlAmigavel.replace(' ','-');
};

console.log(urlAmigavel);
