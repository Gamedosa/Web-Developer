// Você está criando um sistema de cadastro em que a pessoa usuária pode cadastrar quantos nomes quiser, um por vez.
//  O processo deve continuar até que seja encontrado a palavra "fim" (com letras minúsculas).

// Crie um programa que com base em uma entrada pré-definida de nomes, exiba cada um deles, e encerre somente quando encontrar o valor "fim".

const entradas = ["Ana", "Bruno", "Carla", "fim", "Daniel"];

const cadastrarNomes = (nome) => {
        console.log(`Nome: ${nome}`)
    }

const verificarLista = (lista, callback) =>{
    let i = 0;
    while(i < lista.length && lista[i] !== 'fim'){
        callback(lista[i])
        i++
    }
    console.log('Cadastro encerrado.')
}

verificarLista(entradas,cadastrarNomes)
