const prompt = require("prompt-sync")();
const { z } = require('zod');

const racaoKgString = (prompt("Peso da ração (kg): "))
const racaoGrString = (prompt("Peso da ração (gr): "))

const racaoKg = Number(racaoKgString.replace(".",","))
const racaoGr = Number(racaoGrString.replace(".",","))

const moldeKgGr = z.number()
    .positive()
    .multipleOf(0.01);

try {
    console.log("Valores inseridos são válidos.")

    const consumoDia = Number(racaoGr / 1000)
    const duracaoDia = Number(Math.floor(racaoKg / consumoDia))
    const sobra = Number(racaoKg % consumoDia) * 1000


    console.log(`Duração: ${duracaoDia.toFixed(0)} dias`)
    console.log(`O que sobra: ${sobra.toFixed(0)}gr`)


} catch (e) {
    console.log("O formato é INVÁLIDO!");
    console.log(`Motivo: ${e.errors[0].message}`);
}
