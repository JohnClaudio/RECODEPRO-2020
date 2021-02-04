import React from 'react'

export default class categoria extends React.Component{
     
    Exibir_categoria (categoria){

        let elementos = document.getElementsByClassName("card");
    
        for (let i = 0; i < elementos.length; i++) {
            console.log(elementos[i].id);
    
            if (categoria == elementos[i].id) {
    
                elementos[i].style = "display: block;  float-right;";
            } else
                elementos[i].style = "display: none;";
        }
    }
     Exibir_todos (){
        let elementos = document.getElementsByClassName("card");
    
        for (let i = 0; i < elementos.length; i++) {
                elementos[i].style = "display: block;";
    
        }
    
      }
 
render(){
    return(
    
     <div className="row float-left mr-4 ml-2 mt-5">

    
    <div className="list-group">
    
<a onclick={this.Exibir_todos()} className="list-group-item list-group-item-action">Todos</a>
  <a onclick={this.Exibir_categoria('violino')} className="list-group-item list-group-item-action">Violino</a>
  <a onclick={this.Exibir_categoria('teclado')} className="list-group-item list-group-item-action">Teclado</a>
  <a onclick={this.Exibir_categoria('guitarra')}className="list-group-item list-group-item-action">guitarra</a>
  <a onclick={this.Exibir_categoria('flauta')} className="list-group-item list-group-item-action">flauta</a>
  <a onclick={this.Exibir_categoria('violao')} className="list-group-item list-group-item-action">violao</a>
  <a onclick={this.Exibir_categoria('ukulele')}className="list-group-item list-group-item-action">ukulele</a>
  
  
  
</div>
         

    </div>
  

    )
    
    }
}


