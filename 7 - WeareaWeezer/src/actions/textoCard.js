export default function textoCard(texto){
    return({
    type: 'TEXTO_CARD_ALTERADO', 
    payload: texto 
    })
}

