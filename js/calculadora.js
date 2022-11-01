function dividirDoisNumeros(primeiro, segundo) { // Entradas
    // Validação de Entradas
    if(primeiro < 0 || segundo < 0) {
        alert("NÃO PODE SER NÚMERO ABAIXO DE 0!")
        return "Inválido"
    }

    if(segundo == 0) { // F
        alert("NÃO PODE DIVIDIR POR ZERO!")
        return "Inválido"
    }

    // Processamento
    const resultado = primeiro / segundo

    // Saída de dados
    return resultado
}

module.exports.dividirDoisNumeros = dividirDoisNumeros