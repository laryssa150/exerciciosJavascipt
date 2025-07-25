//criando uma função

function somaValor(){
    let num1=10, num2=20, resp=0

    resp = num1 + num2

    console.log(resp)
}

let num3 = 30, num4 = 50, resp2= 0

//criando uma função com parametros

function somaValorN(num3 = 20,num4 = 30){

    resp2 = num3 + num4

    console.log(resp2)
}

//criando uma função com parametros

function somaValorR(num3,num4){

    return  num3 + num4
}


//executando uma função
somaValor();
somaValorN(30,50)

let resposta = somaValorR(80,90)
console.log(resposta)