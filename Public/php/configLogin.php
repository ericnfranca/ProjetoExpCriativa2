<?php
$conexao = mysqli_connect("localhost", "root", "", "projetoexpcriativa2");

$email = $_GET["email"];
$senha = $_GET["senha"];

mysqli_query($conexao, "SELECT INTO pessoa(email, senha_hash_sha256) VALUES ('$email', '$senha')");

mysqli_close($conexao);
?>