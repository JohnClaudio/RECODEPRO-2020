import React from 'react';

import { connect } from 'react-redux';
import letraMusica from './actions/musica'
import tituloMusica from './actions/tituloMusica'

function App (props){
   const nome = props.min
   const titulo = props.titulo
   const letra = props.letra


   console.log(props.min)

  return(
  <div>
    console.log(nome)
    <button onClick={props.alterarLetra('letrasss')}></button>
    <p>{nome}</p>
    <p>{titulo}</p>
    <p>{letra}</p>
  </div>)
}

function mapear_estados_de_props (state){
return {nome: state.nomes.arquivo,
        min: state.nomes.min,
        titulo: state.titulos.titulo,
        letra: state.letras.letra
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
  mapDispatchToProps
  )(App)