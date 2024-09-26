// Podemos declarar uma variável usando a palavra-chave 'var', 'let' ou 'const'.

var nome = 'João';
let sobrenome = 'Silva';
const nomeCompleto = 'João Silva';

console.log(nome, sobrenome, nomeCompleto)

// Podemos redeclarar uma variável usando 'var', 'let' ou 'const'.

var nome = 'Maria'; // Primeira declaração com 'var' aceita ser redeclarada e reescrita.
sobrenome = 'Silva'; // Segunda declaração com 'let' aceita ser redeclarada e reescrita mas não aceita ser reescrita.
nomeCompleto = 'Maria Silva'; // Terceira declaração com 'const' aceita ser redeclarada e reescrita mas não aceita ser reescrita.