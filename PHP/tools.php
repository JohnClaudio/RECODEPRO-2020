<?php
include("conexao.php");

function sql_categorias():array
{

  $conexao = new mysqli (HOST,USER,PASS,DATABASE);
  $SQL = "SELECT DISTINCT categoria from produto";
  $result = $conexao->query($SQL);
  $row = $result->fetch_all(MYSQLI_ASSOC);
  return  $row;
}

function query_lojas():array
{

  $conexao = new mysqli (HOST,USER,PASS,DATABASE);
  $SQL = "SELECT * from lojas";
  $result = $conexao->query($SQL);
  $row = $result->fetch_all(MYSQLI_ASSOC);
  return  $row;
}

function query_contador($value): int
{

  $conexao = new mysqli (HOST,USER,PASS,DATABASE);
  $SQL = "SELECT COUNT(categoria) as total from produto where categoria = '$value' ";
  $result = $conexao->query($SQL);
  $row = $result->fetch_assoc();
  return $row['total'];
}


function sql_produtos():array
{

  $conexao = new mysqli (HOST,USER,PASS,DATABASE);
  $SQL = "SELECT * from produto";
  $result = $conexao->query($SQL);
  $row = $result->fetch_all(MYSQLI_ASSOC);

  return  $row;
}
 ?>
