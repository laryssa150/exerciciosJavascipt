const frutas = ["Morango", "Uva-Verde", "Banana"];

const numero = new Array(1,2,3,4,5);

let primeiroItem = frutas[0]
let segundoIem = frutas[2]

console.log(frutas[0])
console.log(numero[2])

console.log(frutas)
console.log(numero)

//const fruta = ["Morango", "Uva-verde","Banana"];

//for(let i = 0; < fruta.length; i++){
   // console.log(frutas[1]);
//}

const numeros = [10,20,30,40,50];
let i = 0;

while (i < numeros.length){
    console.log(numeros[i]);
    i++;
}

const cores = ["Rosa", "Roxo", "Vermelho"];

cores.forEach(function(cor){
    console.log(cor);
});