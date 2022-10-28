
// Importando o SCSS que será injetado no HTML
import "./style.scss" 
// Importando o módulo de outro arquivo
const gerenciaDeNomes = require("./js/gerenciaDeNomes")

// Pegamos o botão e adicionamos o evento para disparar a função acima
const botao_01 = document.querySelector("#botao_ex_01")
botao_01.addEventListener("click", executar_01)

// Função que será executada ao clicar no botão 01
function executar_01(){
    // Pegar inputs e seus valores - Entradas
    const nome = document.querySelector("#nome").value
    const sobrenome = document.querySelector("#sobrenome").value

    // Chamar meu módulo para juntar os nomes e retornar o resultado - Processamento
    const resultado = gerenciaDeNomes.juntarDoisNomes(nome, sobrenome)

    // Pegar um elemento do HTML para mostrar este resultado - Saída
    const divResultado = document.querySelector("#resultado_01")
    divResultado.innerHTML = "Nome Completo: " + resultado
}