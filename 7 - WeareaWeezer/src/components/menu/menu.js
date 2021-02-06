import React from 'react'
import { connect } from 'react-redux';

import letraMusica from '../../actions/musica'
import textoCard from '../../actions/textoCard'

function Menu (props){
    return(
        <nav class="navbar fixed-bottom navbar-expand-lg navbar-light bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" >We Are Weezer</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">

              <li class="nav-item ">
                <a class="nav-link text-white"  value="1" onClick={e => props.alterarLetra(0)}>Say It Ain't So.</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white"  value="2" onClick={e => props.alterarLetra(1)}>Photograph</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white"  value="3" onClick={e => props.alterarLetra(2)}>Undone</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" value="3" onClick={e => props.alterarTexto(3)}> Historia</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>)
}

function mapDispatchToProps (dispatch){
    
    return {
        alterarLetra (letra) {
          const action = letraMusica(letra)
          dispatch(action)
        },
  
        alterarTexto (texto) {
          const action = textoCard(texto)
          dispatch(action)
        }
      }
    
  }
  
  export default connect(null,
      mapDispatchToProps
      )(Menu)
