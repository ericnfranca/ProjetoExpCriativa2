<?php
$conexao = mysqli_connect("localhost", "root", "", "projetoexpcriativa2");

$email = $_POST["email"];
$senha = $_POST["senha"];

//mysqli_query($conexao, "SELECT INTO pessoa(email, senha_hash_sha256) VALUES ('$email', '$senha')");

$resultado = mysqli_query($conexao, "SELECT * FROM pessoa WHERE email= '$email' and senha_hash_sha256= '$senha' and validacao_email= 's'");
$resultadoRow = mysqli_num_rows ($resultado);


if ($resultadoRow == false){
    echo json_encode("n");

}else{
    echo json_encode("s");
}

mysqli_close($conexao);
?>