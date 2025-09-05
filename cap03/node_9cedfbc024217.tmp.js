const prompt = require("prompt-sync")();
const { z } = require('zod');
const tempoString = (prompt("Digite o tempo de trabalho: "))
const salarioString = (prompt("Digite o seu salario: ")) 

const tempo = Number(tempoString.replace(',','.'))
const salario = Number(salarioString.replace(',','.'))

const moldeDoSalario = z.number()
    .positive("O salário não pode ser negativo.")
    .multipleOf(0.01, "O salário pode ter no máximo 2 casas decimais.");

    try {
    moldeDoSalario.parse(salario);
    
    console.log("O salário é VÁLIDO!");
    console.log(`Valor: R$ ${salario.toFixed(2)}`);

} catch (e) {
    console.log("O salário é INVÁLIDO!");
    console.log(`Motivo: ${e.errors[0].message}`);
}