const Funcionario = require("../funcionario/funcionario");

class Gerente extends Funcionario{
    constructor(nome, matricula, salario, funcao, divisao){
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
            sal_func = (this._salario * 0.25) + this._salario
            console.log(`O salário do funcionário é de R$ ${sal_func}`)
        }

        return sal_func
    }

  
}

module.exports = Gerente