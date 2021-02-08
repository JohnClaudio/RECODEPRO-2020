import {lazy,Suspense, React} from 'react'
import   './componentes/estilos/master.css'
import   './componentes/estilos/menu.css'

const Header = lazy(() => import('./componentes/layout/Header'));
const Footer = lazy(() => import('./componentes/layout/Footer'));

const Routers = lazy(() => import('./router'));
export default function App()  {

return(
<div>
<Suspense fallback={ <p>Carregando Menu...</p> }>
<Header />
</Suspense>

<Suspense fallback={ <p>Carregando Componentes</p> }>
<Routers />
</Suspense>

 
 <Suspense fallback={ <p>Carregando Menu...</p> }>
<Footer />
</Suspense>



</div>

)

}
