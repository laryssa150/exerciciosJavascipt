const numeros = [10, 50, 30, 90, 20];

// Use .reduce para encontrar o maior número.

 const maiorValor = numeros.reduce((maiorValor, elementoAtual)=>{
  return maiorValor > elementoAtual? maiorValor: elementoAtual;
 }, 0)

 console.log(maiorValor);
