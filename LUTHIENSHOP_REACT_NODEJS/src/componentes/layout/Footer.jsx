import React from 'react'
import cartoes from './cartoes.png'
function Rodape ()  {
   return( 
   <footer>
    <center><span>
       <h5 class="display-6 text-danger">FORMAS DE PAGAMENTO</h5>
       <img src={cartoes} alt="cartões de crédito" onclick="destaque(this)" height="20%" width="40%"/>
    </span>
    <p class="display-6 mt-5">&copy; RECODE PRO</p></center>
 </footer>
 );
}



export default Rodape;