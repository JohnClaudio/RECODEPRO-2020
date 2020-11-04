<?php
include_once("./layout/layout.php");
montar_header();
?>
   <body>
     <?php montar_menu(); ?>
  <hr>

  <header>
    <h2>CONTATO</h2>
  </header>

      <div class="contato">
         <div class="telefones borda">
            <img src="./imagens/wpp.png" width="60px" >
            <p>(11) 9.7668.5862</p>
         </div>
         <div class="telefones borda">
            <img src="./imagens/telefone.png" width="60px" >
            <p>(11) 9.2222.33333</p>
         </div>
      </div>

      <div class="formulario">
         <form>
            <label>Envie uma mensagem!</label>
            <p>Nome: </p>
            <input type="text" width="400px">
            <p>Sugestão:</p>
            <textarea width="400px"></textarea>
            <input type="submit">
         </form>
      </div>
<?php montar_footer(); ?>

   </body>
</html>
