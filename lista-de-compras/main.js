// Importando os pacotes
const { add_item, remove_item, exibir_lista} = require('./pacotes/gerenciador_de_listas')
const { msg_sucesso , msg_erro, msg_aviso} = require('./pacotes/formatador _de_mensagem')
const { carregarDados, salvarDados } = require('./pacotes/armazenamento_local')

// Carregar a lista de compras (a partir de um arquivo JSON, se existir)
let lista = carregarDados();

// Função para adicionar um item na lista e salvar
function adicionarItem(itemNome, quantidade) {
    const novoItem = { item: itemNome, quantidade: quantidade }
    const resultado = add_item(lista, novoItem);
    console.log(msg_sucesso(`Item "${itemNome}" com quantidade ${quantidade} adicionado com sucesso!`));
    salvarDados(lista); // Salva a lista atualizada no arquivo
}

// Função para remover um item da lista e salvar
function removerItem(item) {
    const resultado = remove_item(lista, item)
    if (resultado) {
        console.log(msg_sucesso(`Item "${item}" removido com sucesso!`))
    } else {
        console.log(msg_erro(`Erro: O item "${item}" não foi encontrado na lista.`))
    }
    salvarDados(lista); // Salva a lista atualizada no arquivo
}

// Função para exibir a lista formatada
function exibirListaFormatada() {
    console.log(msg_aviso("Sua lista de compras:"))
    console.log(exibir_lista(lista))
}

// Exemplo de uso das funções
adicionarItem("Maçã",4)
adicionarItem("Banana",5)
removerItem("Maçã",2)
adicionarItem("Abacate",2)
adicionarItem("Goiaba",5)
exibirListaFormatada()
