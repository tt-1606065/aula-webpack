


function adicionarEventoBotao(idBotao, nomeEvento, funcaoASerExecutada) {
    document.querySelector(idBotao).addEventListener(nomeEvento, funcaoASerExecutada)
}

function pegarValores(ids) { // Retorne todos os valores dos inputs que eu pedi
    let valores = []

    ids.forEach(idAtual => {
        valores.push(pegarValorPorId(idAtual))
    });

    return valores
}

function pegarValorPorId(id){
    return document.querySelector(id).value
}

function escreverResultado(id, resultado){
    document.querySelector(id).innerHTML = resultado
}

module.exports.adicionarEventoBotao = adicionarEventoBotao
module.exports.pegarValores = pegarValores
module.exports.pegarValorPorId = pegarValorPorId
module.exports.escreverResultado = escreverResultado