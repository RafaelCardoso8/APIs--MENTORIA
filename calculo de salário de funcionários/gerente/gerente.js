const Funcionario = require("../funcionario/funcionario");

class Supervisor extends Funcionario{
    constructor(divisao){
        super(nome, matricula, salario, funcao)
        this._nome = nome
        this._matricula = matricula
        this._salario = salario
        this._funcao = funcao
        this._divisao = divisao

    }

    calculo_salario(){
        let sal_func

        if( this._funcao === "Gerente"){
            sal_func = this._salario * 0.15
            console.log(`O salário do funcionário é de R$ ${sal_func}`)
        }
    }

    
}

module.exports = Supervisor