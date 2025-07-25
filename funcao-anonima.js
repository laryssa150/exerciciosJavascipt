//Passando como callback.
 
setTimeout(function(){
    console.log("Função anônima executada após 1 segundo");
 
}, 1000);
 
//Atribuindo a uma variável.
 
const minhaFuncao = function(parametro){
    return parametro * 2;
};
 
console.log(minhaFuncao(5));

//
 
setTimeout(() => console.log("função anonima executada apos 1 segundo",1000));