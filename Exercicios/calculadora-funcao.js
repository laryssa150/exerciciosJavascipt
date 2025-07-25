// função soma valor

const somaValor = (num1, num2)=> num1 + num2;
    
    // função subtrair valor
    
    const subtrairValor = (num1, num2) =>num1 - num2;
    
        // função multipicar valor
    
    const multiplicaValor = (num1, num2)=> num1 * num2;
    
        // função dividir valor
    
    const dividiValor=(num1, num2)=>num1 / num2;
     
        // Operação
     
    let num1 = 20, num2 = 30 , resp = 0, op = 1 , nome
     
    switch(op){
        case 1 : resp = somaValor(num1, num2)
        nome = 'soma'
        break
        case 2 : resp = subtrairValor(num1, num2)
        nome = 'subtração'
        break
        case 3 : resp = dividiValor(num1, num2)
        nome = 'Divisão'
        break
        case 4 : resp = multiplicaValor(num1, num2)
        nome = 'Multiplicação'
        break
    }
     
    console.log(`A ${nome} de ${num1} e ${num2} é ${resp}` )