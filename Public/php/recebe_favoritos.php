<?php

session_start();

$conexao = mysqli_connect("localhost", "root", "", "projetoexpcriativa2");

$usuarioId =  $_SESSION["idUsuario"];

$sql = "select * from filmes fi inner join favoritos fv on fi.id = fv.id_filme where fv.id_usuario = $usuarioId";

$result = mysqli_query($conexao,$sql);

while($row = mysqli_fetch_object($result))
{
    $res[] = $row;
}


echo json_encode($res);

mysqli_close($conexao);
?>