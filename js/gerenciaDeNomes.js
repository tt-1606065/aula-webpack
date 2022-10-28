// O que vou receber? - In
    // Primeiro nome
    // Sobrenome
// O que vou fazer? - Processamento
    // Juntar os dois nomes recebido
// O que preciso retornar? - Out
    // A junção dos dois nomes

function juntarDoisNomes(nome, sobrenome) { // Entradas
    if (nome == "") { // SE ENTAO -> true ou false
        alert("Não é possivel com nome vazio!")
        return "Nome Inválido"
    }

    return nome + " " + sobrenome
    // return `${nome} ${sobrenome}` 
}

function nomeEhValido(nome) { // Entradas
    return nome != ""
}

module.exports.juntarDoisNomes = juntarDoisNomes
module.exports.nomeEhValido = nomeEhValido