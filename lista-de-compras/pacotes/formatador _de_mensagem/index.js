function msg_sucesso(mensagem){
    return `Sucesso! ${mensagem}`
}

function msg_erro(mensagem){
    return `Erro! ${mensagem}`
}

function msg_aviso(mensagem){
    return `Aviso! ${mensagem}`
}

module.exports = {msg_sucesso, msg_erro, msg_aviso}