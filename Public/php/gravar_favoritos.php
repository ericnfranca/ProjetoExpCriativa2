<?php

session_start();

$conexao = mysqli_connect("localhost", "root", "", "projetoexpcriativa2");

$pessoa = $_POST["id_pessoa"];
$filme = $_POST["id_filme"];

mysqli_query($conexao, "INSERT INTO favoritos(id_pessoa, id_filme) VALUES ('$pessoa', '$filme')");

mysqli_close($conexao);

?>