<?php

session_start();

$conexao = mysqli_connect("localhost", "root", "", "projetoexpcriativa2");

$usuarioId =  $_SESSION["idUsuario"];
$serie = $_POST["id_serie"];

mysqli_query($conexao, "DELETE FROM favoritosseries WHERE id_pessoa = $usuarioId AND id = $serie");

mysqli_close($conexao);

?>