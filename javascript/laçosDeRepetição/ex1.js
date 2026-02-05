// Você está criando um aplicativo para exibir a sequência de números até um valor que o usuário forneceu. 
// O objetivo é mostrar todos os números a partir de 1 até o valor informado pelo usuário, de forma ordenada e crescente.

// Como você pode gerar essa contagem e garantir que cada número seja mostrado até atingir o valor final fornecido?



const exibirSequencia = (numero) =>{
    let resultado = []
     for(let i = 0; i<=numero; i++)
        resultado.push(i)
    return resultado
}
console.log(exibirSequencia(5))