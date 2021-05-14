<?php

session_start();

$conexao = mysqli_connect("localhost", "root", "", "projetoexpcriativa2");

$email = $_POST["email"];
$senha = $_POST["senha"];

$resultado = mysqli_query($conexao, "SELECT * FROM pessoa WHERE email= '$email' and senha_hash_sha256= '$senha' and validacao_email= 's'");
$resultadoRow = mysqli_num_rows ($resultado);

$retorno["status"] = "n";
$retorno["mensagem"] = "usuario nao cadastrado";
$retorno["funcao"] = "login";

if (mysqli_num_rows ($resultado) > 0){
    
    $registro = mysqli_fetch_assoc($resultado);

    $_SESSION["email"] = $registro["email"];
    $_SESSION["id"] = session_id();
    $_SESSION["idUsuario"] = $registro["id"];
    $_SESSION["inicio"] = time();
    $_SESSION["tempo_limite"] = 10000;

    
    $retorno["status"] = "s";
    $retorno["mensagem"] = "usuario cadastrado";
}

if ($resultadoRow == false) {
    echo json_encode("n");

} else {
    echo json_encode("s");
}
mysqli_close($conexao);
?>