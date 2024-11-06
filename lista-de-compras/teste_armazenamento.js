
const { carregarDados, salvarDados } = require('./pacotes/armazenamento_local')

// Exemplo de dados para teste
const dadosDeTeste = [
    { item: "Maçã", quantidade: 3 },
    { item: "Banana", quantidade: 2 },
    { item: "Abacate", quantidade: 5 },
    {item: "Mamão", quantidade: 4}
]

// Função de teste para salvar e carregar dados
function testarArmazenamento() {
    console.log("=== Teste: Salvando dados ===")
    
    // Tenta salvar os dados de teste no arquivo JSON
    salvarDados(dadosDeTeste);
    
    console.log("\n=== Teste: Carregando dados ===")
    
    // Carrega os dados do arquivo JSON para verificar se foram salvos corretamente
    const dadosCarregados = carregarDados()
    console.log("Dados carregados:", dadosCarregados)
    
    // Verifica se os dados carregados são iguais aos dados de teste
    if (JSON.stringify(dadosCarregados) === JSON.stringify(dadosDeTeste)) {
        console.log("\nTeste concluído: Dados carregados corretamente!")
    } else {
        console.log("\nErro: Os dados carregados não correspondem aos dados de teste.")
    }
}


testarArmazenamento()
