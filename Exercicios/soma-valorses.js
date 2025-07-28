const numeros = [10, 20, 30, 40];

// Use .reduce para somar todos os números do array.

const somas = numeros.reduce((valorAcumulado, elementoAtual)=>{
    return valorAcumulado + elementoAtual;
   }, 0)
  
   console.log(somas);
  