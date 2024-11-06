function add_item(lista,item){
  if (!lista.includes(item)) {  // Verifica se o item já existe
    lista.push(item);          // Adiciona o item à lista
    return true;
} else {
    return false;
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
    // Garante que apenas itens válidos sejam exibidos
    return "Itens na lista:\n" + lista
        .filter(item => typeof item === 'string' || (typeof item === 'object' && item.item)) // Filtra strings e objetos com 'item'
        .map(item => typeof item === 'string' ? `- ${item}` : `- ${item.item}`)
        .join("\n");
}

}

module.exports = {add_item, remove_item, exibir_lista}

