<?php
include_once("./layout/layout.php");
include_once("tools.php");
montar_header();
?>
<body>
<?php montar_menu(); ?>

  <header>
    <h2>NOSSAS LOJAS</font></h2><hr>
  </header>

  <section class="lojas">

  <?php foreach ($lojas = query_lojas() as $key => $value): ?>
    <div class="lojascolumn">
      <h3 class="title"><?php echo "{$value['estado']}"; ?></font></h3>
      <p><?php echo "{$value['endereco']}"; ?></p>
      <p><?php echo "{$value['cidade']}"; ?></p>
      <p><?php echo "{$value['contato']}"; ?></p>
    </div>
<?php endforeach; ?>

</section>

    <footer>
      <span>
      <h4><font face="Arial">FORMAS DE PAGAMENTO</font></h4>
      <img height="20%" width="40%"src="./imagens/cartoes.png" alt="cartões de crédito">
      </span>

    <p>&copy; RECODE PRO</p>
    </footer>

</body>

</html>
