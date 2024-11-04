function percentual_gordura(sexo,peso, altura,idade){
    let perc_gord

    if(sexo == "masculino"){
        perc_gord = (1.20 * (peso * (altura * altura))) + (0.23 * idade) - (10.8 * 1) - 5.4
    }
    else{
        perc_gord = (1.20 * (peso * (altura * altura))) + (0.23 * idade) - (10.8 * 0) - 5.4
    }

    return perc_gord
}

//console.log(percentual_gordura("masculino", 90, 1.78, 38))

module.exports = percentual_gordura