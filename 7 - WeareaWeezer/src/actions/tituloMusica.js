function tituloMusica(titulo){
    return({
    type: 'TITULO_MUSICA_ALTERADA', 
    payload: titulo 
    })
}

export default tituloMusica