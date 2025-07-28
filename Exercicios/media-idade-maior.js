const pessoas = [
    { nome: "Ana", idade: 17 },
    { nome: "João", idade: 21 },
    { nome: "Carlos", idade: 16 },
    { nome: "Mariana", idade: 25 }
  ];
  
  // 1. Use filter para pegar quem tem 18 ou mais
  const resultado = pessoas.filter((pessoa) => pessoa.idade >18);
  console.log(resultado);


  // 2. Use map para extrair as idades

  const idades = pessoas.map((pessoa) => pessoa.idade);
  console.log(idades);


  // 3. Use reduce para somar e calcular a média

  const idade = [17,21,16,25];

 const somarValor = idade.reduce((valorAcumulado, elementoAtual)=>{
  return valorAcumulado + elementoAtual;
 }, 0) / idade.length

 console.log(somarValor);

  

