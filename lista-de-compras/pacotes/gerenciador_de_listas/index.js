function add_item(lista,novoitem){
    const itemExistente = lista.find(item => item.item === novoitem.item)
    if (itemExistente) {
        return false // Se já existe, retorna falso para evitar duplicação
    } else {
        lista.push(novoitem) // Adiciona o novo item com quantidade
        return true
    }
}

function remove_item(lista,item){
    let item_remov =lista.indexOf(item)
    if (item_remov !== -1) { 
    lista.splice(item_remov, 1)
    return `Item ${item} foi removido da lista`
    }
    else{
        return`O item não foi encontrao na lista`
    }
}

function exibir_lista(lista) {
    if (lista.length === 0) {
        return "A lista está vazia.";
    } else {
        // Filtra e exibe apenas itens válidos, com nome e quantidade
        return "Itens na lista:\n" + lista
            .filter(item => typeof item === 'object' && item.item && item.quantidade) // Filtra objetos com 'item' e 'quantidade'
            .map(item => `- ${item.item} (Quantidade: ${item.quantidade})`) // Exibe nome e quantidade
            .join("\n");
    }

}

module.exports = {add_item, remove_item, exibir_lista}

