// Importando os pacotes
const { add_item, remove_item, exibir_lista} = require('./pacotes/gerenciador_de_listas')
const { msg_sucesso , msg_erro, msg_aviso} = require('./pacotes/formatador _de_mensagem')
const { carregarDados, salvarDados } = require('./pacotes/armazenamento_local')

// Carregar a lista de compras (a partir de um arquivo JSON, se existir)
let lista = carregarDados();

// Função para adicionar um item na lista e salvar
function adicionarItem(item) {
    const resultado = add_item(lista, item);
    console.log(msg_sucesso(`Item "${item}" adicionado com sucesso!`));
    salvarDados(lista); // Salva a lista atualizada no arquivo
}

// Função para remover um item da lista e salvar
function removerItem(item) {
    const resultado = remove_item(lista, item);
    if (resultado) {
        console.log(msg_sucesso(`Item "${item}" removido com sucesso!`));
    } else {
        console.log(msg_erro(`Erro: O item "${item}" não foi encontrado na lista.`));
    }
    salvarDados(lista); // Salva a lista atualizada no arquivo
}

// Função para exibir a lista formatada
function exibirListaFormatada() {
    console.log(msg_aviso("Sua lista de compras:"));
    console.log(exibir_lista(lista));
}

// Exemplo de uso das funções
adicionarItem("Maçã")
adicionarItem("Banana")
removerItem("Maçã")
adicionarItem("Abacate")
adicionarItem("Goiaba")
exibirListaFormatada()
