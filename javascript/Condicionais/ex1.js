// Crie um programa que, dado o valor da idade, verifique se a pessoa pode ou não entrar no evento. 
// Exiba a mensagem informando se o acesso foi ou não permitido.

function verificarIdade ( idade){
    if (idade >= 18){
        return 'Acesso permitido.'
    }
    else{
        return 'Acesso Negado.'
    }
}

console.log(verificarIdade(18))
console.log(verificarIdade(17))
console.log(verificarIdade(21))