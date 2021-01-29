import React from 'react'
import Categoria from './categoria'
import ExibirProdutos from './lista_produtos'
import ExibirCategoria from './categoria'
import {Exibir_todos,Exibir_categoria} from './valinor'


export default class Lojas extends React.Component{

    render(){
    return(
    
  <div>
   <ExibirCategoria/>
   <ExibirProdutos/>
   
 
  </div>


   

    )
    
    }
}