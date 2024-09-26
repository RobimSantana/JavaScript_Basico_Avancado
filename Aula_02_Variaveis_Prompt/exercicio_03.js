// 3. Escreva um programa que seja capaz de calcular a area e o perimetro de um triangulo,
// O usuario deve inserir as informaçoes necessarias e o programa exibirar os resultados 


// Obtenha os ledos do triangulo usando o prompot
const ladoA = parseFloat(prompt("Digite o comprimento do lado A:"));
const ladoB = parseFloat(prompt("Digite o comprimento do lado B:"));
const ladoC = parseFloat(prompt("Digite o comprimento do lado C"));

// Calcule o prerimetro do triangulo
const perimentro = ladoA + ladoB + ladoC;

// calcule a area esando a formula de Heron
const sp = perimentro / 2 ; // Semiperimentro
const area = Math.sqrt(sp - ladoA) * (sp - ladoB) * (sp - ladoC);

// Exibe os resultados em um alert
alert(`Perimetro do triangulo: ${perimentro}\nArea do triangulo: ${area}`);