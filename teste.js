let microondas = {
    pipoca: 10,
    macarrao: 8,
    carne: 15,
    feijao: 12,
    brigadeiro:8,
    esquentar: (comida, tempo) =>{
        switch(comida){
            case 'pipoca':
                tempoPadrao = microondas.pipoca
                return acao(tempo, tempoPadrao);

            case 'macarrao':
                tempoPadrao = microondas.macarrao
                return acao(tempo, tempoPadrao);
            
            case 'carne':
                tempoPadrao = microondas.carne
                return acao(tempo, tempoPadrao); 
            case 'feijao':
                tempoPadrao = microondas.feijao
                return acao(tempo, tempoPadrao);
            case 'brigadeiro':
                tempoPadrao =  microondas.brigadeiro
                return acao(tempo, tempoPadrao);
            default:
                return "Prato inexistente"
        } 
    }
}

function acao(tempoInformado, tempoPadrao){
    if(tempoInformado > 3*tempoPadrao) {
        return "KABUM!"
    } else if( tempoInformado >= 2*tempoPadrao){
        return "COMIDA QUEIMOOOOU!!!!"
    } else if(tempoInformado < tempoPadrao){
        return "Tempo Insuficiente"
    } else if( tempoInformado >= tempoPadrao  &&  tempoInformado < 2*tempoPadrao){
        return "Prato pronto, bom apetite!"
    }
}
 
console.log(microondas.esquentar('canjica', 30));
console.log(microondas.esquentar('feijao', 12));
console.log(microondas.esquentar('pipoca', 46));
console.log(microondas.esquentar('feijao', 12));
console.log(microondas.esquentar('macarrao', 16));
console.log(microondas.esquentar('brigadeiro', 5));
