<?php

function sql_categorias():array
{
  include_once("conexao.php");
  $conexao = new mysqli (HOST,USER,PASS,DATABASE);
  $SQL = "SELECT DISTINCT categoria from produto";
  $result = $conexao->query($SQL);
  $row = $result->fetch_all(MYSQLI_ASSOC);

  return  $row;
}

function sql_produtos():array
{
  include_once("conexao.php");
  $conexao = new mysqli (HOST,USER,PASS,DATABASE);
  $SQL = "SELECT * from produto";
  $result = $conexao->query($SQL);
  $row = $result->fetch_all(MYSQLI_ASSOC);

  return  $row;
}
 ?>
