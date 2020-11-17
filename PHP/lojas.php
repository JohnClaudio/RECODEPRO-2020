<?php
include_once("./layout/layout.php");
include_once("tools.php");
montar_header();
?>
<body>
<?php montar_menu(); ?>



<div class="container mt-5">
  <header>
    <h2 class="display-6">NOSSAS LOJAS</h2><hr>
  </header>

<div class="row">

    <?php foreach ($lojas = query_lojas() as $key => $value): ?>

  <div class="col-sm-4">
    <div class="jumbotron  mt-5 text-center">
      <div class="text-center">
        <h3 class="lead"><?php echo "{$value['estado']}"; ?></h3>
        <p><?php echo "{$value['endereco']}"; ?></p>
        <p><?php echo "{$value['cidade']}"; ?></p>
        <p><?php echo "{$value['contato']}"; ?></p>
      </div>
        </div>
            </div>
  <?php endforeach; ?>


</div>


  <?php montar_footer(); ?>
</div>

</body>

</html>
