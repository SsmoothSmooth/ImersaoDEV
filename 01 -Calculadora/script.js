const nick = "Teste nome"

const notaPrimeiroBimestre = 9
const notaSegundoBimestre = 7.55555
const notaTerceiroBimestre = 4
const notaQuartoBimestre = 2

const notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4

const notaFixada = notaFinal.toFixed(2)
console.log("Welcome " + nick)

console.log("Nota Final " + notaFixada)
