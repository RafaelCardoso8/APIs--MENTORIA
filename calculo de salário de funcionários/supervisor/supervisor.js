const Funcionario = require("../funcionario/funcionario");

class Supervisor extends Funcionario{
    constructor(gerente, area){
        super(nome, matricula, salario, funcao)
        this._nome = nome
        this._matricula = matricula
        this._salario = salario
        this._funcao = funcao
        this._gerente = gerente
        this._area =area

    }

    calculo_salario(){
        let sal_func

        if( this._funcao === "Gerente"){
            sal_func = this._salario * 0.25
            console.log(`O salário do funcionário é de R$ ${sal_func}`)
        }
    }

    exibir_funcionário(){
        console.log(`Funcionário:\nNome: ${this._nome}\nMatrícula: ${this._matricula}\nFunção: ${this._funcao}\n--------------`)
    }
    
}
