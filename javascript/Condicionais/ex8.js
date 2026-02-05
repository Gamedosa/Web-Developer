// Você está criando um sistema de verificação de status de pagamento de clientes.
//  Dependendo do status, o sistema deve exibir uma mensagem apropriada:

// Se o status for "pendente", exibe: "Pagamento pendente".
// Se o status for "aprovado", exibe: "Pagamento aprovado".
// Se o status for "recusado", exibe: "Pagamento recusado".
// Use o switch/case para criar um programa que faça essa verificação e mostre a mensagem correspondente ao status do pagamento.

const verificarStatus = (status) =>{
    switch(status){
        case 'pendente': 
            return 'Pagamento Pentende.';
            
        case 'aprovado': 
            return 'Pagamento aprovado.';
            
        case 'recusado': 
            return 'Pagamento recusado.';
        
        default:
            return 'Status inexistente.'
    }
}

console.log(verificarStatus('aprovado'))
console.log(verificarStatus('pendente'))
console.log(verificarStatus('recusado'))
console.log(verificarStatus('producao'))