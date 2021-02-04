import React from 'react'
import ListarLojas from "./tabela";

export default class Json extends React.Component {

    constructor(){
        super();
        this.state=({
            db: []
        });
        this.ExibirLojas();
    }
    ExibirLojas(){
        fetch("http://localhost/react/src/controler/tools.php")
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

            
          <div className="row">
    
            {
            this.state.db.map(item =>
            <div className="col-sm-4">
            <div className="jumbotron mt-5 text-center">      

                                <h3 className="lead">{item.estado}</h3>
                                <p>{item.cidade}</p>
                                <p>{item.endereco}</p>
                      
            </div>
            </div>
                )
            }
        </div>
      
        );
    }

}