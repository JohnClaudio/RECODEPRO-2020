import React from "react";
import './Letra.css'
import Video from '../Video/Video'
import { connect } from 'react-redux';

import letraMusica from '../../actions/musica'
import tituloMusica from '../../actions/tituloMusica'

function Letra (props){
    const titulo = props.titulo
    const lancamento = props.lancamento
    const letra = props.letra
    const video = props.video

    return(
        <div className="CardLetra mt-4">
        <p>{props.letra}</p>
        <Video video={props.video}></Video>
  </div>
    )
}

function mapear_estados_de_props (state){
    return {
    
            titulo: state.titulos.titulo,
            lancamento: state.titulos.lancamento,
            letra: state.letras.letra,
            video: state.letras.video
    }
    }
    
    function mapDispatchToProps (dispatch){
    
      return {
          alterarLetra (letra) {
            const action = letraMusica(letra)
            dispatch(action)
          },
    
          alterarTitulo (titulo) {
            const action = tituloMusica(titulo)
            dispatch(action)
          }
        }
      
    }
    
    export default connect(
        mapear_estados_de_props,
    
        )(Letra)
