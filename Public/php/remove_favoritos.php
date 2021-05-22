<?php

session_start();

$conexao = mysqli_connect("localhost", "root", "", "projetoexpcriativa2");

$usuarioId =  $_SESSION["idUsuario"];
$filme = $_POST["id_filme"];

mysqli_query($conexao, "DELETE FROM favoritos WHERE id_pessoa = $usuarioId AND id = $filme");

mysqli_close($conexao);

?>