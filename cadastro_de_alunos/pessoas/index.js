class Pessoa{
    constructor(nome, idade, cpf){
        this._nome = nome
        this._idade = idade
        this._cpf = cpf

    }

    exibirPessoa(){
        console.log(`Nome: ${this._nome}\n Idade: ${this._idade} \n CPF: ${this._cpf}`)

    }

}

module.exports =Pessoa

