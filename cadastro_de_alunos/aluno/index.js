const Pessoa = require('../pessoas/Pessoa')

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
        if(media > 17){
            console.log(`A media do aluno é ${media}. APROVADO!!`)

        }
        else if(media > 15){
            console.log(`A media do aluno é ${media}. RECUPERAÇÃO!!`)

        }
        else{
            console.log(`A media do aluno é ${media}. REPROVADO!!`)
        }

        console.log(`A media do aluno é ${media}`)
    }

}

module.exports = Aluno