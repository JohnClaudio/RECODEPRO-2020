import React from 'react'
import { connect } from 'react-redux';

import letraMusica from '../../actions/musica'
import tituloMusica from '../../actions/tituloMusica'

function Menu (props){
    return(
        <nav class="navbar fixed-bottom navbar-expand-lg navbar-light bg-success">
        <div class="container-fluid">
          <a class="navbar-brand" >We Are Weezer</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">

              <li class="nav-item ">
                <a class="nav-link text-white"  value="1" onClick={e => props.alterarLetra(0)}>Say't soo</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white"  value="2" onClick={e => props.alterarLetra(1)}>Segunda</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white"  value="3" onClick={e => props.alterarLetra(2)}>Terceira</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Historia</a>
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
  
        alterarTitulo (titulo) {
          const action = tituloMusica(titulo)
          dispatch(action)
        }
      }
    
  }
  
  export default connect(null,
      mapDispatchToProps
      )(Menu)
