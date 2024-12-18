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
            console.log(`O salário do funcionário é de R$ ${sal_func}`)
        }

        return this._salario

    }

    exibir_funcionário(){
        console.log(`Funcionário:\nNome: ${this._nome}\nMatrícula: ${this._matricula}\nFunção: ${this._funcao}\n--------------`)
    }
}

module.exports = Funcionario