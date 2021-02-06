import React from 'react';




import Letra from './components/Letra/Letra'
import Menu from './components/menu/menu'



import './App.css'

export default function App (props){



  return(
  <div>

    <button value="2" onClick={e => props.alterarLetra(e.target.value)}></button>
  
  
    <Letra ></Letra>
    <Menu></Menu>



  </div>)
}



