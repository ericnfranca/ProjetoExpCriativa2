<?php
$conexao = mysqli_connect("localhost", "root", "", "projetoexpcriativa2");

$email = $_POST["email"];
$token = $_POST["token_red"];

$resultred = mysqli_query($conexao, "SELECT * FROM pessoa WHERE email= '$email'");
$resultredRow = mysqli_num_rows ($resultred);


if ($resultredRow == false){
    echo json_encode("n");

}else{
    mysqli_query($conexao, "UPDATE pessoa SET token_red = '$token' WHERE email = '$email'");
    echo json_encode("s");
}

mysqli_close($conexao);
?>