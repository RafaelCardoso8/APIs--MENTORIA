class Funcionario{
    constructor (nome, matricula, salario, funcao){
        this._nome = nome
        this._matricula = matricula
        this._salario = salario
        this._funcao = funcao
    }

    calculo_salario(){
        let  sal_func

        if( this._funcao === "funcionário"){
            sal_func = this._salario
            console.log(`o salário do funcionário é de R$ ${sal_func}`)
        }

    }
}

module.exports = Funcionario