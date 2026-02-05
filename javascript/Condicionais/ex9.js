// Você está criando um sistema para um jogo, onde o personagem tem que passar por duas condições para conseguir avançar para o próximo nível:

// O personagem precisa ter mais de 50 pontos.
// O personagem deve ter pelo menos uma vida restante.
// Crie um programa que, dado os pontos e as vidas restantes, verifique se o personagem pode ou não avançar para o próximo nível.

const verificarStatus = (pontos,vida) =>{
    if(isNaN(pontos,vida)){
        return ' Informe um valor Númerico.'
    }
    else if (pontos > 50 & vida >= 1){
        return ' Parabéns! Você avançou para a próxima fase.'
    }
    else{
        return 'Pontos e/ou vidas não atingem as condições necessárias.'
    }
}

console.log(verificarStatus('a','b'))
console.log(verificarStatus(50,2))
console.log(verificarStatus(51,3))