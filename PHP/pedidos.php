<?php
include_once("./layout/layout.php");
montar_header();
session_start();
$_SESSION['sql']=null;
?>

   <body>
      <?php montar_menu(); ?>

      <main >

<div class="container">

<div class="row">

  <div class="col-md">
    <form class="pedidos" action="cadastrar_pedido.php" method="post">
    <h2>Preencha os dados atentamente</h2>
    <?php if (!$_SESSION['sql'] != null) {
      echo   $_SESSION['sql'];
      // code...
    }else {
    echo $_SESSION['sql'];
    }?>

    <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label>Seu nome</label>
      <input type="text" name="nome_cliente" class="form-control" >
    </div>
    <div class="form-group col-md-6">
      <label for="telefone">Telefone</label>
      <input type="text" name="telefone" class="form-control" id="telefone">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Endereco</label>
    <input type="text" class="form-control" id="inputAddress" name="endereco" placeholder="seu endereco">
  </div>
  <div class="form-group">
    <label for="produto">Produto</label>
    <input type="text" name="produto" class="form-control" id="produto" placeholder="nom e descrição do produto">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="Quantidade">Quantidade</label>
      <input type="text" name="qtd" class="form-control" id="Quantidade">
    </div>
    <div class="form-group col-md-2">
      <label for="Valor">Valor</label>
      <input type="text" name="valor" class="form-control" id="Valor">
    </div>
  </div>

  <button type="submit" class="btn btn-primary">Realizar pedido</button>
</form>


      </main>
  </div>

</div>



  </div>
   </body>
</html>
