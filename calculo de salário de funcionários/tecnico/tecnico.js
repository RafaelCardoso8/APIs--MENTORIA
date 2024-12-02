const Funcionario = require("../funcionario/funcionario");

class Tecnico extends Funcionario{
    constructor(supervisor , area){
        super(nome, matricula, salario, funcao)
        this._nome = nome
        this._matricula = matricula
        this._salario = salario
        this._funcao = funcao
        this._supervisor = supervisor
        this._area = area
    }

    calculo_salario(){
        let sal_func

        if( this._funcao === "Técnico"){
            sal_func = this._salario * 0.1
            console.log(`O salário do funcionário é de R$ ${sal_func}`)
        }
    }

}


module.exports = Tecnico