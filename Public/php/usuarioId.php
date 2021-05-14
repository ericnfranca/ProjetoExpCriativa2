<?php

session_start();

$conexao = mysqli_connect("localhost", "root", "", "projetoexpcriativa2");

$usuarioId =  $_SESSION["idUsuario"];


echo json_encode($usuarioId);

mysqli_close($conexao);
?>