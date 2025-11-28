/*
Crie uma classe que represente uma conta bancária simples.
Ela deve ter número da conta, saldo e métodos para depositar, sacar (apenas se houver saldo) e consultar o saldo.
*/

class ContaBancaria{
    numero
    saldo

    constructor(numero,saldo){
        this.numero = numero;
        this.saldo = saldo;
    }

    depositar(dinheiro){
        this.saldo += dinheiro
        console.log(`Deposito de ${dinheiro} feito com sucesso!`)
    }

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor
            console.log(`Saque de ${valor} realizado com sucesso.`)
        }else{
            console.log('Saldo insuficiente.')
        }
    }

    consultar(){
        console.log(`O saldo na conta ${this.numero} é de ${this.saldo}`)
    }
}

conta1 = new ContaBancaria('1844612-0', 30);
conta1.consultar()
conta1.depositar(100)
conta1.consultar()
conta1.sacar(130)
conta1.consultar()
