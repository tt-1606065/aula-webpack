function dividirDoisNumeros(primeiro, segundo) {
    if(primeiro < 0) {
        alert("NÃO PODE SER NÚMERO ABAIXO DE!")
        return
    }
    if(segundo == 0) {
        alert("NÃO PODE DIVIDIR POR ZERO!")
        return
    }
    const resultado = primeiro / segundo
    return resultado
}

module.exports.dividirDoisNumeros = dividirDoisNumeros