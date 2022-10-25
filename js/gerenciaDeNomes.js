// O que vou receber? - In
    // Primeiro nome
    // Sobrenome
// O que vou fazer? - Processamento
    // Juntar os dois nomes recebido
// O que preciso retornar? - Out
    // A junção dos dois nomes

function juntarDoisNomes(primeiroNome, sobrenome) { // Entradas
    return `${primeiroNome} ${sobrenome}`
}

function nomeEhValido(nome) { // Entradas
    return nome != ""
}

module.exports.juntarDoisNomes = juntarDoisNomes
module.exports.nomeEhValido = nomeEhValido