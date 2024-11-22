const readline = require('readline')
const fs = require('fs')
const Aluno = require('./aluno/index.js')

// Configuração do readline para capturar a entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let alunos = []; // Array para armazenar os alunos

// Função para perguntar dados do aluno e criar uma nova instância de Aluno
function cadastrarAluno() {
    rl.question('Digite o nome do aluno: ', (nome) => {
        rl.question('Digite a idade do aluno: ', (idade) => {
            rl.question('Digite o CPF do aluno: ', (cpf) => {
                rl.question('Digite a nota 1: ', (nota1) => {
                    rl.question('Digite a nota 2: ', (nota2) => {
                        rl.question('Digite a nota 3: ', (nota3) => {
                            // Criar um novo aluno com os dados capturados
                            const aluno = new Aluno(nome, parseInt(idade), cpf, parseFloat(nota1), parseFloat(nota2), parseFloat(nota3));
                            alunos.push(aluno)

                            // Perguntar se deseja adicionar outro aluno
                            rl.question('Deseja adicionar outro aluno? (s/n): ', (resposta) => {
                                if (resposta.toLowerCase() === 's') {
                                    cadastrarAluno(); // Repetir o cadastro para um novo aluno
                                } else {
                                    salvarDados(); // Salvar os dados no arquivo JSON
                                    exibirAlunos(); // Exibir todos os alunos cadastrados
                                    rl.close();
                                }
                            })
                        })
                    })
                })
            })
        })
    })
}

// Função para salvar os dados no arquivo JSON
function salvarDados() {
    const data = alunos.map(aluno => ({
        nome: aluno._nome,
        idade: aluno._idade,
        cpf: aluno._cpf,
        notas: [aluno._n1, aluno._n2, aluno._n3],
        media: aluno.calcularMedia(),
        status: aluno.calcularMedia() > 6 ? "APROVADO" : aluno.calcularMedia() > 5 ? "RECUPERAÇÃO" : "REPROVADO"
    }))

    fs.writeFileSync('alunos.json', JSON.stringify(data, null, 2), 'utf-8')
}

// Função para exibir todos os alunos cadastrados
function exibirAlunos() {
    console.log('\nLista de Alunos:')
    alunos.forEach(aluno => {
        console.log(`Nome: ${aluno._nome}, Idade: ${aluno._idade}, CPF: ${aluno._cpf}`)
        aluno.exibirMedia();
    })
}

// Iniciar o cadastro de alunos
cadastrarAluno();
