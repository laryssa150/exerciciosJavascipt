const produtos = [
    { nome: "Camiseta", preco: 50, emPromocao: true },
    { nome: "Calça", preco: 100, emPromocao: false },
    { nome: "Tênis", preco: 200, emPromocao: true },
  ];

  //1 Usando filter
  
  const resultado = produtos.filter((produto) => produto.emPromocao);

  console.log(resultado);

  //2 Usando Map

  const precos = produtos.map((produto) => produto.preco);
  console.log(precos);


  //3 Usando reduce

  const preco = [50,100,200];

 const somarValor = preco.reduce((valorAcumulado, elementoAtual)=>{
  return valorAcumulado + elementoAtual;
 }, 0);

 console.log(somarValor);

  
  