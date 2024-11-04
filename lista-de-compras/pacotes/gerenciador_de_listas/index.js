function add_item(lista,item){
    if(lista.includes(item)){
        return`Item ${item} já existe na lista`
    }
    else{
        lista.push(item)
        return `Item ${item} adicionado a lista!`
        
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
    return "A lista está vazia."
  } 
  else {
    return "Itens na lista:\n" + lista.join("\n")
  }
}

module.exports = {add_item, remove_item, exibir_lista}

