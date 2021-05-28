<?php

$conexao = mysqli_connect("localhost", "root", "", "projetoexpcriativa2");

$email = $_POST["email"];
$senha = $_POST["senha"];

$resultado = mysqli_query($conexao, "SELECT * FROM pessoa WHERE email= '$email' and senha_hash_sha256= '$senha' and validacao_email= 's' and adm='1'");
$resultadoRow = mysqli_num_rows ($resultado);


if ($resultadoRow == false) {
    echo json_encode("n");

} else {
    echo json_encode("s");
}

mysqli_close($conexao);

?>