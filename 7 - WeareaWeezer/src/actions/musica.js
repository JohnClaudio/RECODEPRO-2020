function letraMusica(letra){
    return({
    type: 'LETRA_MUSICA_ALTERADA', 
    payload: letra 
    })
}

export default letraMusica