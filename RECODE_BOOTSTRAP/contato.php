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

 <div class="container">


    <div class="row alert alert-danger">
      <div class="col-sm-5  ml-5  text-center">
        <img src="./imagens/wpp.png" width="60px" >
        <p>(11) 9.7668.5862</p>
      </div>

      <div class="col-lg ml-5 text-center">
        <img src="./imagens/telefone.png" width="60px" >
        <p>(11) 9.2222.33333</p>
      </div>
    </div>


<div class="row">
  <div class="col-lg">
    <form>
      <div class="form-group">
        <label for="exampleFormControlInput1">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>

      <div class="form-group">
        <label for="exampleFormControlTextarea1">Sua Sugestão</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    </form>
</div>
      </div>


<?php montar_footer(); ?>
 </div>
   </body>
</html>
