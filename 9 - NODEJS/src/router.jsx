import React from 'react';
//import {Router, Route, Redirect, hasHistory} from 'react-router'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Principal from './componentes/pages/index'
import Lojas from './componentes/pages/lojas/lojas'
import Produtos from './componentes/pages/produtos/produtos'
import Contato from './componentes/pages/contatos/contato'
import Pedido from './componentes/pages/pedidos/pedido'





export default function Routers() {
  
    return(
  <BrowserRouter>
  
  <Switch>

    <Route>
        <Route path="/" exact component={Principal} />
        <Route path="/lojas" component={Lojas} />
 
        <Route path="/produtos" component={Produtos} />
        <Route path="/contato" component={Contato} />
        <Route path="/pedido" component={Pedido} />


    </Route>

  </Switch>
  </BrowserRouter>
    )
    
}