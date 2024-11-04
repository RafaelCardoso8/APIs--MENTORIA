function tmb(sexo, peso, altura, idade){
    let tmb
    if(sexo == "masculino"){
        tmb = 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade)
    }
    else{
        tmb = 447.6 + (9.6 * peso) + (3.1 * altura) - (4.3 * idade)
    }
    return tmb
  
}
module.exports = tmb