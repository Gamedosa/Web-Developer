// Operador Ternário/Operador Condicional é outra formar de declarar o if else

const nome = ' Fernando';
const saudacao = nome? `olá, ${nome}`: 'olá, pessoa';
console.log(saudacao) //olá, Fernando

// nome? está verificando se a condição é true
// `olá, ${nome} -> o que será retornado se a condição for true
//  : 'olá, pessoa' -> O que sera retornado se a condição for false
//  Variável com uma string dentro sempre retorna true