const { add_item, remove_item, exibir_lista} = require('./pacotes/gerenciador_de_listas')

let lista = []

console.log(add_item(lista, "Maçã"))
console.log(add_item(lista, "Abacte"))
console.log(add_item(lista, "Banana"))
console.log(add_item(lista, "Maçã"))
console.log(add_item(lista, "Mamão"))
console.log("-----------")

console.log(remove_item(lista, "Maçã"))
console.log(remove_item(lista, "Mamão"))
console.log(remove_item(lista, "Goiaba"))
console.log("-----------")

console.log(exibir_lista(lista))
