const numeros = [1, 2, 3, 4, 5, 6];

// 1. Use filter para pegar os pares


const numeroPares = numeros.filter((numero) => numero % 2 === 0);
  console.log(numeroPares);

// 2. Use map para elevar cada um ao quadrado

const pares = [2,4,6];

const elevar = pares.map((numero) => numero ** 2);
console.log(elevar); // [4, 16, 36]


// 3. Use reduce para somar tudo

const soma = [4,16,36];

const somaTudo = soma.reduce((valorAcumulado, elementoAtual)=>{
    return valorAcumulado + elementoAtual;
   }, 0);
   console.log(somaTudo);