/* Crie uma classe que represente um carro.
Ela deve ter algumas informações básicas (como marca, modelo e quantidade de combustível)
 e métodos que permitam abastecer e ver o status atual do carro.
 */


class Carro {
    marca;
    modelo;
    qtd_combustivel;

    constructor(marca, modelo, qtd_combustivel){
        this.marca = marca;
        this.modelo = modelo;
        this.qtd_combustivel = qtd_combustivel;

    }

    abastecer(qtd_combustivel){
        
        this.qtd_combustivel += qtd_combustivel

        console.log("Carro abastecido!")

    }
    visualizarTanque (){
        console.log(`O carro ${this.modelo} tem ${this.qtd_combustivel} de gasolina`)
    }
}


carro1 = new Carro('Fiat', 'Uno', 0);

carro1.visualizarTanque()
carro1.abastecer(50);
carro1.visualizarTanque()
carro1.abastecer(100);
carro1.visualizarTanque()






