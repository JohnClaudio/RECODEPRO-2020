import React from 'react'

export default class lista_produto extends React.Component {
  
constructor(){
        super();
        this.state=({
            db: []
        });
        this.ExibirProdutos();
    }

    ExibirProdutos(){
        fetch("http://localhost/react/src/controler/produtos.php")
        .then((response)=>response.json())
        .then((responseJson)=>
        {
            this.setState({
                db: responseJson
            });
           
        })
    }
    render(){
        return(
            <div class="card-deck">
          <div className="row">
            
            {
            this.state.db.map(item =>
            
            <div className="col-sm-4 float-sm-left">
                <div className="card" id={item.categoria} value={item.id_produto}>
                 <img className="card-img-top" src={require(`${item.nome_imagem}`).default} onclick="destacar(this)"/>
                 <div className="card-body">
                   <h5 className="card-title">{item.categoria}</h5>
                   <p className="card-text">{item.descricao}</p>
                 </div>
                 <ul className="list-group list-group-flush text-center">
                   <li className="list-group-item"><strike>R$ {item.preco}</strike></li>
                   <li className="list-group-item text-danger"><h4>R$ {item.preco_desconto}</h4></li>
                 </ul>
                 <div className="card-body text-center">
                  
                   <a href="#" className="card-link">Comprar</a>
                 </div>

               </div>
             </div>
                )
            }
        </div>
        </div>
      
        );
    }

}