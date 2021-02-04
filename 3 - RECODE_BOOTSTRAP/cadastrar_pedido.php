<?php
include_once('conexao.php');
session_start();
$conexao = new mysqli (HOST,USER,PASS,DATABASE);

$nome = $_POST["nome_cliente"];
$end = $_POST['endereco'];
$telefone = $_POST['telefone'];
$produto = $_POST['produto'];
$valor = $_POST['valor'];
$qtd = $_POST['qtd'];

$SQL= "insert into pedido (nome,endereco,telefone,nome_produto,valor_unitario,qtd_produto,valor_total)
 values ('$nome', '$end', '$telefone', '$produto', $valor, $qtd, 12)";

if (mysqli_query($conexao, $SQL)===true) {
  $_SESSION['sql'] = "dados cadastrados com sucesso";

}else {
  $_SESSION['sql'] = "falhou";
}
echo   $_SESSION['sql'] ;

header('location: pedidos.php');
 ?>
