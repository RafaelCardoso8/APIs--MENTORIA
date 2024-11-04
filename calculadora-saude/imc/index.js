function calcIMC(peso, altura){
    let imc 
    imc = peso / ( altura * altura )
    return imc
}

module.exports = calcIMC