const  {msg_sucesso , msg_erro, msg_aviso} = require('./pacotes/formatador _de_mensagem')

console.log(msg_sucesso("Sua ação foi realizada!"))
console.log(msg_erro("Sua ação não foi realizada."))
console.log(msg_aviso("O item já existe na lista"))

