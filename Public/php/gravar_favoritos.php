<?php

session_start();

$conexao = mysqli_connect("localhost", "root", "", "projetoexpcriativa2");

$usuario = $_POST["id_usuario"];
$filme = $_POST["id_filme"];

mysqli_query($conexao, "INSERT INTO favoritos(id_usuario, id_filme) VALUES ('$usuario', '$filme')");

mysqli_close($conexao);



?>