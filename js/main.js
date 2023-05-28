"use strict";

var input = document.getElementById("input"), // botao de input e output
    numero = document.querySelector(".numero div")//botao de numero

// Função para adicionar dois números
function adicionar(num1, num2) {
    return num1 + num2;
}

// Função para subtrair dois números
function subtrair(num1, num2) {
    return num1 - num2;
}

// Função para multiplicar dois números
function multiplicar(num1, num2) {
    return num1 * num2;
}

// Função para dividir dois números
function dividir(num1, num2) {
    if (num2 === 0) {
        return "Erro: Não é possível dividir por zero!";
    }
    return num1 / num2;
}