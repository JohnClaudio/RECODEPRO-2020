import react from 'react'
import wpp from './wpp.png'
import telefone from './telefone.png'

export default function Lista_contato()  {
    return(
        <div>   
            <div class="mt-5 row alert alert-danger">
            
            <div class="col-sm-5 ml-5  text-center">
                <img src={wpp} width="60px" />
                <p>(11) 9.7668.5862</p>
            </div>

            <div class="col-lg ml-5 text-center">
                <img src={telefone} width="60px" />
                <p>(11) 9.2222.33333</p>
            </div>

         </div>

        </div>
    )
}