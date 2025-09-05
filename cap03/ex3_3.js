const prompt = require("prompt-sync")();
const { z } = require('zod');
const tempoString = (prompt("Digite o tempo de trabalho: "))
const salarioString = (prompt("Digite o seu salario: ")) 

const tempo = Number(tempoString.replace(',','.'))
const salario = Number(salarioString.replace(',','.')) 

const moldeDoSalario = z.number()
    .positive()
    .multipleOf(0.01);

    try {
    moldeDoSalario.parse(salario); 
    
    console.log("O salário é VÁLIDO!");
    console.log(`Valor: R$ ${salario.toFixed(2)}`);

    const calculo = Number(salario * 0.01 )
    const resultado = Number(calculo * tempo)
    const somaDosValores = Number( resultado + salario)

    console.log(`O salario ao longo de ${tempo} é: ${somaDosValores.toFixed(2)}`)

} catch (e) {
    console.log("O salário é INVÁLIDO!");
    console.log(`Motivo: ${e.errors[0].message}`);
}


