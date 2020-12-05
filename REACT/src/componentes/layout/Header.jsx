import React from 'react'

export default function Header(){
return(
<div>
<nav class="navbar navbar-expand-lg navbar-light bg-danger">
  <a class="navbar-brand text-white" href="/principal">Luthien Shop</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon "></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
    <div class="navbar-nav bg-danger text-white" >
      <a class="nav-item nav-link text-white " href="/produtos.php">PRODUTOS</a>
      <a class="nav-item nav-link text-white" href="/lojas">LOJAS</a>
      <a class="nav-item nav-link text-white" href="/contato">CONTATO</a>
      <a class="nav-item nav-link text-white" href="/pedidos">Pedidos</a>
    </div>
  </div>
</nav>
</div>
)
}