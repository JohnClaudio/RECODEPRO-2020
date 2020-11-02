<?php
include_once("./layout/layout.php");
include_once("tools.php");
include_once("conexao.php");
montar_header();
 ?>
   <body>

      <header>
         <h2>PRODUTOS</h2>
      </header>

      <main>
         <hr>
         <div class="categorias">
            <h3>Categorias</h3>
            <br>
            
            <ul id="lista">
              <li onclick="exibir_todos();">Todos Produtos</li>
              <?php foreach($array = sql_categorias() as $key => $value):?>
              <li onclick="exibir_categoria('<?php echo $value['categoria']?>');"> <?php echo $value['categoria'];?> (2)</li>
             <?php endforeach; ?>
         </ul>
         </div>


         <section class="produtos">

           <?php foreach($array = sql_produtos() as $key => $value): ?>

             <section class="box_produto" id="<?php echo $value['categoria']?>" style="display: block;">
                <img src="<?php echo $value['nome_imagem']; ?>" onclick="destacar(this)">
                <p class="desc"><?php echo $value['descricao'] ?></p>
                <p class="desc2"><strike><?php echo $value['preco']; ?></strike></p>
                <hr>
                <p class="preco"><?php echo $value['preco_desconto']; ?></p>
             </section>

          <?php endforeach;?>





         </section>

      </main>

      <footer>
         <span>
            <h4>FORMAS DE PAGAMENTO</h4>
            <img height="20%" width="40%"src="./imagens/cartoes.png" alt="cartões de crédito">
         </span>
         <p>&copy; RECODE PRO</p>
      </footer>

   </body>
</html>
