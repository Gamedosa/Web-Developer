
//  Switch case serve para quando temos uma lista de alternativa/opções;
// Por exemplo um retorno em texto baseada na nota de avaliação (1-5) 

const avaliação = 1;
switch(avaliação){
    case 5:
        console.log('Avaliação ótima')
        break;
    case 4:
        console.log('Avaliação boa');
        break;
    case 3:
        console.log('Avaliação boa');
        break;
    case 2:
        console.log('Avaliação Ruim');
        break
    default:
        console.log('Avaliação Péssima');
        break;
    }

    // Neste exemplo há uma falha pois qualquer valor maior que 5, irá cair no caso do default.