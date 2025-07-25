const pessoas = [
    {nome: "João", idade: 25},
    {nome: "Maria",idade: 30},
    {nome:"Luana", idade: 22}
]
 
const adicionar = pessoas.map((pessoa) => {
    const categoria = pessoas.idade <30? 'Jovem' : 'Adulto';
    return{
        ...pessoa,
            categoria
    };
}
);
 
console.log(adicionar);