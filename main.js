import "./style.scss"

// EXERCICIO DIVISAO
const calculadora = require("./js/calculadora")
document.querySelector("#botao_ex_02").addEventListener("click", executar_02)

function executar_02() {
    // Entradas de dados - Pegar esses valores do input do HTML
    const numero_1 = document.querySelector("#numero_1").value
    const numero_2 = document.querySelector("#numero_2").value

    // Processamento - Dividir dois números
    const resultado = calculadora.dividirDoisNumeros(numero_1, numero_2)

    // Saída de dados - Na caixa de resultado (div) lá no HTML
    document.querySelector("#resultado_02").innerHTML = resultado
}



// EXERCICIO NOMES
const gerenciaDeNomes = require("./js/gerenciaDeNomes")

const botao_01 = document.querySelector("#botao_ex_01")
botao_01.addEventListener("click", executar_01)

function executar_01() {
    // Pegando os valores de entrada lá no HTML
    const nome = document.querySelector("#nome").value
    const sobrenome = document.querySelector("#sobrenome").value

    // Processamento
    /*
    {
        juntarDoisNomes: f() juntarDoisNomes,
        nomeEhValido: f() nomeEhValido
    }
    */
    const resultado = gerenciaDeNomes.juntarDoisNomes(nome, sobrenome)

    // Saída de dados
    const divResultado = document.querySelector("#resultado_01")
    // divResultado.innerHTML = "Nome Completo: " + resultado
    divResultado.innerHTML = `Nome Completo: ${resultado}`
}










