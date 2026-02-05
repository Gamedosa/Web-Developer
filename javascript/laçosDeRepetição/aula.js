//  for(inicialização; Condição; atualização)

// const numero = 5;

// for (let i= 1; i<=10;i++){
//     const resultado = numero * i;
//     console.log(`${numero} X ${i} = ${resultado}`)
// }


// while (condição){
    // bloco de código
// }

let numeroSecreto = 8;
let numeroAleatorio = 0;
let contandor = 0;

while(numeroSecreto !== numeroAleatorio){
    numeroAleatorio = Math.floor(Math.random()*(50-1-+1)+1)
    contandor++;
}

console.log(`Adivinhou em ${contandor} tentativas`)