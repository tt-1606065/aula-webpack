import "./style.scss"

const moduloTela = require("./js/moduloTela")
const calculadora = require("./js/calculadora")

moduloTela.adicionarEventoBotao("#botao_ex_02", "click", executar_02)

function executar_02() {
    const valores = moduloTela.pegarValores(["#numero_1", "#numero_2"])
    const resultado = calculadora.dividirDoisNumeros(valores[0], valores[1])
    moduloTela.escreverResultado("#resultado_02", resultado)
}

const gerenciaDeNomes = require("./js/gerenciaDeNomes")

moduloTela.adicionarEventoBotao("#botao_ex_01", "click", executar_01)

function executar_01() {
    const valores = moduloTela.pegarValores("#nome", "#sobrenome")
    const resultado = gerenciaDeNomes.juntarDoisNomes(valores[0], valores[1])
    moduloTela.escreverResultado("#resultado_01", `Nome Completo: ${resultado}`)
}










