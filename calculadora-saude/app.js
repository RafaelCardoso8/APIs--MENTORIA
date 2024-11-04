const calc_imc = require('./imc')
const calc_percentual_gordura = require('./percentual-gordura')
const calc_quadril_cintura = require('./quadril-cintura')
const calc_tmb = require('./tmb')


const imc = calc_imc(75 , 1.61)
const percentual_gordura = calc_percentual_gordura("feminino", 75, 1.61, 38 )
const quadril_cintura = calc_quadril_cintura( 107,91 )
const tmb = calc_tmb("feminino", 75, 1.61, 38 ) 

console.log(`O IMC é : ${imc}`)
console.log(`O Percentual de gordura é: é : ${percentual_gordura}`)
console.log(`A relação quadril-cintura é : ${quadril_cintura}`)
console.log(`O TMB é : ${tmb}`)