import  {NoReact, MeuTexto, NovoTexto} from './componentes/primeiro'
import  {Menu, Footer, Index} from './componentes/layout/layout'
import   './componentes/estilos/master.css'
import   './componentes/estilos/menu.css'
import Routers from './router'

export default function App()  {

return(
<div>

    <Menu />
  
   <Routers />
   { /*
    <MeuTexto
    nome= "joao"
   sobrenome="claudio" />*/}
 
<Footer />


</div>

)

}
