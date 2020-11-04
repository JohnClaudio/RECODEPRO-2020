<?php
include_once("./layout/layout.php");
include_once("tools.php");

montar_header();
 ?>
   <body>
     <?php montar_menu(); ?>
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
              <?php
              foreach($array = sql_categorias() as $key => $value):
              ?>
              <li onclick="exibir_categoria('<?php echo $value['categoria']?>');"> <?php echo "{$value['categoria']}". "(". query_contador($value['categoria']).")" ?>  </li>

              <?php endforeach; ?>

         </ul>
         </div>

      <section class="produtos">
           <?php
           foreach($array = sql_produtos() as $key => $value):
            ?>

  <section class="box_produto" id="<?php echo $value['categoria']?>" value="<?php echo $value['id_produto']?>" style="display: block;">
             <img src="<?php echo $value['nome_imagem']; ?>" onclick="destacar(this)">
             <p class="desc"><?php echo $value['descricao'] ?></p>
             <p class="desc2"><strike><?php echo $value['preco']; ?></strike></p>
             <hr>
             <p class="preco"><?php echo $value['preco_desconto'];?></p>
          </section>

        <?php endforeach; ?>
         </section>
    </main>

    <?php montar_footer() ?>
   </body>
</html>
