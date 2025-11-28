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
fruta2 = new Fruta('Maça', 7);

fruta1.descarcar();

function compararQtdFrutas(fruta1,fruta2){
    if(fruta1.quantidade > fruta2.quantidade){
        console.log(`Existem mais ${fruta1.nome} do que ${fruta2.nome}`)
    }  else if(fruta2.quantidade > fruta1.quantidade){
        console.log(`Existem mais ${fruta2.nome} do que ${fruta1.nome}`)
    }
    else{
        console.log(`As quantidades de ${fruta1.nome} e ${fruta2.nome} são iguais`);
    }
}

const f1 = new Fruta('Abacaxi', 7);
const f2 = new Fruta('Goiaba', 7)

compararQtdFrutas(f1,f2);
