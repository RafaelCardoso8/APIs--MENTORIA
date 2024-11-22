const Pessoa = require('../pessoas/index.js')

class Aluno extends Pessoa{
    constructor(nome,idade, cpf, nota1, nota2, nota3){
        super(nome, idade, cpf)
        this._n1 = nota1
        this._n2 = nota2
        this._n3 = nota3
    }

    calcularMedia(){
        return (this._n1 + this._n2 + this._n3) / 3
    }

    exibirMedia(){
        let media = this.calcularMedia()
        if(media > 6){
            console.log(`A media do aluno é ${media}. APROVADO!!`)

        }
        else if(media > 5){
            console.log(`A media do aluno é ${media}. RECUPERAÇÃO!!`)

        }
        else{
            console.log(`A media do aluno é ${media}. REPROVADO!!`)
        }

        console.log(`A media do aluno é ${media}`)
    }

    exibirAluno(){
        console.log(`Aluno: ${this._nome}, Idade: ${this._idade}, CPF: ${this._cpf}`)
    }

}

//let Silva_Santos = new Aluno("Silva Santos", 16, 12332112300, 6.7, 5.6,8)
//Silva_Santos.exibirAluno()
//Silva_Santos.exibirMedia()

module.exports = Aluno