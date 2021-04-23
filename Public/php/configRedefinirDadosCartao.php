<?php
$conexao = mysqli_connect("localhost", "root", "", "projetoexpcriativa2");//trocar senha

$email = $_POST["email"];
$token = $_POST["token_car"];

//mysqli_query($conexao, "SELECT INTO pessoa(email, senha_hash_sha256) VALUES ('$email', '$senha')");



$resultcar = mysqli_query($conexao, "SELECT * FROM pessoa WHERE email= '$email'");
$resultcarRow = mysqli_num_rows ($resultcar);


if ($resultcarRow == false){
    echo json_encode("n");

}else{
    mysqli_query($conexao, "UPDATE pessoa SET token_car = '$token' WHERE email = '$email'");
    echo json_encode("s");
}

mysqli_close($conexao);
?>