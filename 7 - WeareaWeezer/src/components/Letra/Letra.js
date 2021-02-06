import React from "react";
import './Letra.css'
import Video from '../Video/Video'
import CardText from '../CardText/CardText'
import { connect } from 'react-redux';

import letraMusica from '../../actions/musica'
import textoCard from '../../actions/textoCard'

function Letra (props){
    const titulo = props.titulo
    const texto = props.texto
    const letra = props.letra
    const video = props.video

    return(
        <>
    <div className="row">
        <div className="col-sm-4">
        <div className="CardLetra mt-4">
        <p>{props.letra}</p>
        <Video video={props.video}></Video>
         </div>
         </div>
        
        <div className="col-sm-4">
    <div className="Cardtexto ml-4"></div> <CardText texto={props.texto}>oi</CardText>
    </div>

    </div>
 
  </>
    )
}

function mapear_estados_de_props (state){
    return {
    
            texto: state.textoCard.texto,
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
            const action = textoCard(titulo)
            dispatch(action)
          }
        }
      
    }
    
    export default connect(
        mapear_estados_de_props,
        mapDispatchToProps
        )(Letra)
