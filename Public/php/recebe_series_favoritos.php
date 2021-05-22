<?php

session_start();

$conexao = mysqli_connect("localhost", "root", "", "projetoexpcriativa2");

$usuarioId =  $_SESSION["idUsuario"];

$sql = "select * from series se inner join favoritosseries fs on se.id = fs.id_serie where fs.id_pessoa = $usuarioId";

$result = mysqli_query($conexao,$sql);

while($row = mysqli_fetch_object($result))
{
    $res[] = $row;
}


echo json_encode($res);

mysqli_close($conexao);
?>