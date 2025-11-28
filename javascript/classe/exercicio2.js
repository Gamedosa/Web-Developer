/*
Crie uma classe que represente uma pessoa.
Essa pessoa deve ter nome e idade,
 e deve existir um método que simule um aniversário (aumentando a idade) e outro método que retorne uma frase de apresentação.
*/

class Pessoa{
    nome;
    idade;

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;

    }
    aniversario(){
        this.idade += 1;
        console.log('Parabens por mais um ano de vida!!!!')
    }
    apresentar(){
        console.log(`Me chamo ${this.nome} e tenho ${this.idade} anos.`)
    }
}

const p1 = new Pessoa('Maria', 50)

p1.apresentar();
p1.aniversario();
p1.apresentar();
