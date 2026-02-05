// Você é uma pessoa desenvolvedora de um sistema para uma escola que organiza atividades para diferentes faixas etárias. As regras são:

// Se a pessoa tiver menos de 12 anos, ela deve ser classificada como "Infantil".
// Se a pessoa tiver 12 anos ou mais, mas menos de 18 anos, ela deve ser classificada como "Juvenil".
// Se a pessoa tiver 18 anos ou mais, ela deve ser classificada como "Adulto".

function informarClassificacao(idade,callback){
    console.log(`Verificando a idade...\n Idade: ${idade} anos.`)
    const resultado = callback(idade)
    console.log(resultado)
}

function verificarIdade(idade){
    if(idade < 12){
        return 'Infantil';
    }
    else if(idade >=18){
        return 'Adulto';
    }
    else{
        return 'Juvenil';
    }
}

informarClassificacao(18,verificarIdade)
informarClassificacao(12,verificarIdade)
informarClassificacao(11,verificarIdade)