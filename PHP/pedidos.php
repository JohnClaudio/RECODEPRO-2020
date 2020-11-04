<?php
include_once("./layout/layout.php");
montar_header();
session_start();
$_SESSION['sql'];
?>

   <body>
      <?php montar_menu(); ?>

      <main >
        <form class="pedidos" action="cadastrar_pedido.php" method="post">
    <h2>Preencha os dados atentamente</h2>
    <?php if (!$_SESSION['sql'] != null) {
      echo   $_SESSION['sql'];
      // code...
    }else {
    echo $_SESSION['sql'];
    }?>
          <table>
            <tr>
              <td><p>Nome do cliente</p><input name="nome_cliente" type="text"placeholder="Digite seu nome"></td>
            </tr>

            <tr>
              <td><p>Endereço</p><input name="endereco" type="text"placeholder="produto"></td>
            </tr>

             <tr>
                <td><p>telefone</p><input name="telefone" type="text"placeholder="telefone"></td>
             </tr>

             <tr>
                <td><p>Produto</p><input name="produto" type="text"placeholder="descricao"></td>
                <td><p>Valor R$</p><input name="valor" type="text"placeholder="ex: 200,00"></td>
             </tr>
             <tr>
                <td><p>Quantidade </p><input name="qtd" type="text"placeholder="QTD"></td>
             </tr>
  <tr>
  <td>      <button type="submit" name="button">enviar</button></td>

  </tr>

          </table>
        </form>

      </main>

  <?php montar_footer(); ?>
   </body>
</html>
