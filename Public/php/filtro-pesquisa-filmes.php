<?php

session_start();

$conexao = mysqli_connect("localhost", "root", "", "projetoexpcriativa2");

$titulo = $_POST["titulo"];

$sql = "SELECT * FROM filmes WHERE titulo LIKE '%$titulo%'";

$result = mysqli_query($conexao,$sql);

while($row = mysqli_fetch_object($result))
{
    $res[] = $row;
}


echo json_encode($res);

mysqli_close($conexao);
?>