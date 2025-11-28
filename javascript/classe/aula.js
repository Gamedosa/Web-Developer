class Pessoa {
    nome;
    idade;

    /**
     * 
     metodo para apresentar a pessoa
     */
    apresentar() {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos!`)
    }
}

const pessoa1 = new Pessoa();
pessoa1.nome = 'Gabriel'
pessoa1.idade = 24

pessoa1.apresentar();