// Função que faz uma saudação
function saudacao(nome) {
    return `Olá, ${nome}! Bem-vindo ao meu pacote npm.`;
}

//console.log(saudacao("Cardoso"))

// Exportar a função para que possa ser usada por outros projetos
module.exports = saudacao;
