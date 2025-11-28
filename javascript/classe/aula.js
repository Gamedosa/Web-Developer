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

class Fruta {
    nome;
    quantidade;


    constructor(nome,quantidade){
        //Me obriga que quando uma nova fruta for instanciada eu seja obrigado a passar os parametros.
        
        this.nome = nome
        this.quantidade = quantidade
    }
    
    /**
     * metodo para descascar fruta
     */
    descarcar() {
        console.log(`Descascando ${this.quantidade} ${this.nome}`)   
    }
}

fruta1 = new Fruta('banana', 4);

fruta1.descarcar();