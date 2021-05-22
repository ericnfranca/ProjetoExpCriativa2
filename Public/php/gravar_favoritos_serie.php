<?php

session_start();

$conexao = mysqli_connect("localhost", "root", "", "projetoexpcriativa2");

$pessoa = $_POST["id_pessoa"];
$serie = $_POST["id_serie"];

mysqli_query($conexao, "INSERT INTO favoritosseries(id_pessoa, id_serie) VALUES ('$pessoa', '$serie')");

mysqli_close($conexao);



?>