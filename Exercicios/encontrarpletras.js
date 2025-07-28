const letras = ['a', 'b', 'a', 'c', 'b', 'a'];

// Use .reduce para retornar um objeto com a contagem de cada letra.
// Ex: { a: 3, b: 2, c: 1 }

//const contagem = letras.reduce((acc, letra) => {
  //acc[letra] = (acc[letra] || 0) + 1;
  //return acc;
//}, {});

//console.log(contagem);


const contagem = letras.reduce((resultado, item) => {
  resultado[item] = (resultado[item] || 0) + 1;
  return resultado;
}, {});

console.log(contagem);
