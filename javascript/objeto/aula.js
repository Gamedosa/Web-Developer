
const pessoa = {
    nome: 'Gabriel',
    idade: 24,

    apresentar: function (){
        console.log(`Meu nome é ${this.nome}`);
    }
}

// console.log(pessoa.nome)

pessoa.altura = 191

// console.log(pessoa)

pessoa.apresentar()