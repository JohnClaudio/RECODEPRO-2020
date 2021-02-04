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
           <div class="row float-left">
           <div class="col-sm-2">
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
          </div>
         <div class="container">

            <div class="row">
                  <div class="card-deck">
              <?php
              foreach($array = sql_produtos() as $key => $value):
               ?>
                <div class="col-sm-4 float-sm-left">
                 <div class="card" id="<?php echo $value['categoria']?>" value="<?php echo $value['id_produto']?>" style="display:block; min-height: 400px; min-width:200px; margin:10px;">
                  <img class="card-img-top" src="<?php echo $value['nome_imagem']; ?>" onclick="destacar(this)">
                  <div class="card-body">
                    <h5 class="card-title"><?php echo $value['categoria']?></h5>
                    <p class="card-text"><?php echo $value['descricao'] ?></p>
                  </div>
                  <ul class="list-group list-group-flush text-center">
                    <li class="list-group-item"><strike>R$ <?php echo $value['preco']; ?></strike></li>
                    <li class="list-group-item text-danger"><h4>R$ <?php echo $value['preco_desconto'];?></h4></li>
                  </ul>
                  <div class="card-body text-center">
                    <a href="#" class="card-link">Comprar</a>

                  </div>

                </div>
              </div><br> <br>

              <?php endforeach; ?>
    </div>
            </div>

          </div>


    <?php montar_footer() ?>
   </body>
</html>
