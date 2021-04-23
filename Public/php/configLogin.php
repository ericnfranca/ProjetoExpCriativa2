<?php

session_start();

$conexao = mysqli_connect("localhost", "root", "guimateus@2002", "projetoexpcriativa2");

$email = $_POST["email"];
$senha = $_POST["senha"];

//mysqli_query($conexao, "SELECT INTO pessoa(email, senha_hash_sha256) VALUES ('$email', '$senha')");

$resultado = mysqli_query($conexao, "SELECT * FROM pessoa WHERE email= '$email' and senha_hash_sha256= '$senha' and validacao_email= 's'");
$resultadoRow = mysqli_num_rows ($resultado);

$retorno["status"] = "n";
$retorno["mensagem"] = "usuario nao cadastrado";
$retorno["funcao"] = "login";

if (mysqli_num_rows ($resultado) > 0){
    
    $registro = mysqli_fetch_assoc($resultado);

    $_SESSION["email"] = $registro["email"];
    $_SESSION["id"] = session_id();
    $_SESSION["inicio"] = time();
    $_SESSION["tempo_limite"] = 15;

    
    $retorno["status"] = "s";
    $retorno["mensagem"] = "usuario cadastrado";
}
//echo("oi");
//print_r($_SESSION);

//echo json_encode($retorno);

if ($resultadoRow == false){
    echo json_encode("n");

}else{
    //echo json_encode($retorno);
    echo json_encode("s");
}
mysqli_close($conexao);
?>