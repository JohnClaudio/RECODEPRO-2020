<?php
include("conexao.php");

header("Access-Control-Allow-Origin:*");
header("Content-type: application/json");
echo query_produtos();


function query_produtos()
{

  $conexao = new mysqli (HOST,USER,PASS,DATABASE);
  $SQL = "SELECT * from produto";
  $result = $conexao->query($SQL);
  $row = $result->fetch_all(MYSQLI_ASSOC);
  $json = json_encode($row);

  return $json;
}


 ?>
