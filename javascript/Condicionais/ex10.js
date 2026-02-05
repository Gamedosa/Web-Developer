// Você está desenvolvendo um sistema que exibe a situação da bateria de um dispositivo com base na porcentagem de carga. 
// O sistema deve classificar a bateria nas seguintes categorias:

// "Crítica": se a bateria estiver abaixo de 20%
// "Moderada": se estiver entre 20% e 80%
// "Cheia": se estiver acima de 80%
// Utilize o operador ternário para definir e exibir a categoria da bateria com base no valor da variável bateria.

const verificarBateria = (carga) =>{
    const status = carga < 20?'Crítica': carga > 80? 'Cheia': 'Moderada';
    return status
}

console.log(verificarBateria(20))
console.log(verificarBateria(17))
console.log(verificarBateria(95))