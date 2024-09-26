// 2. Escreva um programa JavaScript que funcione como uma calculadora simples.o programa de pedir ao usuario
// para inserir dois numeros usando o prompt(). realizar as 4 operações matematicas ( adição, subtração, multiplicação e divisão) com esses numeros e exibir o resultado usando o alert().

// Solicita que o usuario insira o primeiro numero
let numero1 = prompt("Digite o primeiro numero");

// Solicite que o usuario insira o segundo numero
let numero2 = prompt("Digite i segundo numero");

// Converte os valores inseridos pelo usuario para numeros
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

// Exibe o resultado
alert(`Resultado da soma : ${numero1 + numero2} \nResultado da subtração: ${numero1 - numero2} 
\nResultado da Multiplicação: ${numero1 * numero2} \nResultado da divisão; ${numero1 / numero2}`);