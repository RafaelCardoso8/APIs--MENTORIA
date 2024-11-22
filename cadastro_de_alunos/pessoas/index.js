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



//let Abel = new Pessoa("Abel Silva", 16, 1234567890)
//Abel.exibirPessoa()
module.exports = Pessoa

