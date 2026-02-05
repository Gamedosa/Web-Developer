// Você está desenvolvendo um sistema meteorológico para informar sobre o clima do dia. 
// Com base na temperatura, o sistema deve classificar o dia conforme os critérios abaixo:

// Menor que 15: "Frio"
// De 15 a 25: "Agradável"
// Acima de 25: "Quente"
// Escreva um programa que, dado um valor de temperatura e imprima a mensagem correspondente.


function informarTemperatura(temperatura,callback){
    console.log(`Classificando a temperatura: ${temperatura}`)
    const resultado = callback(temperatura)
    console.log(resultado)
}

function classificarTemperatura(temperatura){
    if(temperatura < 15){
        return 'Frio.'
    }
    else if(temperatura > 25){
        return 'Quente.'
    }
    return 'Agradável.'
}

informarTemperatura(13,classificarTemperatura)
informarTemperatura(15,classificarTemperatura)
informarTemperatura(26,classificarTemperatura)

