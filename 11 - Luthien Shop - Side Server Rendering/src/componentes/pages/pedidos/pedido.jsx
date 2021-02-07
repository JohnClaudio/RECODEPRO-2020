import {lazy,Suspense, React} from 'react'


const PedidoFrm = lazy(() => import('./pedidoFrm'));
export default function pedidos(){
    return(

    <div className="container mt-5">
    <Suspense fallback={ <p>Carregando Formulario Aguarde...</p> }>
    <PedidoFrm></PedidoFrm>
    </Suspense>
    </div>

    )
    
    
}
