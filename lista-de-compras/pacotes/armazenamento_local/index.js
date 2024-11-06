// Importa o módulo 'fs' para manipulação de arquivos
const fs = require('fs')
const caminhoDoArquivo = './pacotes/armazenamento.json'

// Função para carregar os dados do arquivo JSON
function carregarDados() {
    try {
        // Lê o conteúdo do arquivo
        const dados = fs.readFileSync(caminhoDoArquivo, 'utf-8')
        // Retorna os dados em formato de objeto
        return JSON.parse(dados)
    } catch (erro) {
        // Se o arquivo não existir ou houver erro, retorna um array vazio
        console.error("Erro ao carregar dados:", erro)
        return []
    }
}

// Função para salvar os dados no arquivo JSON
function salvarDados(dados) {
    try {
        // Converte os dados para string JSON e escreve no arquivo
        fs.writeFileSync(caminhoDoArquivo, JSON.stringify(dados, null, 2))
        console.log("Dados salvos com sucesso.")
    } catch (erro) {
        console.error("Erro ao salvar dados:", erro)
    }
}

module.exports = { carregarDados, salvarDados }