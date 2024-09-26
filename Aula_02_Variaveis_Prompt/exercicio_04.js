// 4 . Escreva um programa que seja capaz de calcular descontos 
// o usuario inserirá o valor da compra e a porcentagem do desconto  e 
// receberá o valor do desconto e o total .

// Solicita ao usuario o valor da compra
let valorCompra = parseFloat(prompt("Digite o valor da compra:"));

// Solicira ao usuario a porcentagem de desconto
let porcentagemDesconto = parseFloat(prompt("Digite a porcentagem de desconto:"));

// Calcula o valor do desconto
let desconto = (porcentagemDesconto / 100) * valorCompra;

// Calcula o total com o desconto aplicado
let totalComDesconto = valorCompra - desconto;

// Exibe os resultados usando templete string
alert(`Valor da compra: R$ ${valorCompra}
Valor do desconto: R$ ${desconto}
Total com desconto: R$ ${totalComDesconto}`);
