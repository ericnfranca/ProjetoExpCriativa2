<?php
$conexao = mysqli_connect("localhost", "root", "", "projetoexpcriativa2");

$senha = $_POST["senha_hash_sha256"];
$token = $_POST["token_red"];

//mysqli_query($conexao, "SELECT INTO pessoa(email, senha_hash_sha256) VALUES ('$email', '$senha')");



$resultred = mysqli_query($conexao, "SELECT * FROM pessoa WHERE token_red= '$token'");
$resultredRow = mysqli_num_rows ($resultred);


if ($resultredRow == false){
    echo json_encode("n");

}else{
    mysqli_query($conexao, "UPDATE pessoa SET senha_hash_sha256 = '$senha' WHERE token_red= '$token'");
    echo json_encode("s");
}

mysqli_close($conexao);
?>