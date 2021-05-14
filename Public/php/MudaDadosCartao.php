<?php
$conexao = mysqli_connect("localhost", "root", "", "projetoexpcriativa2");//trocar senha

$numero_cartao = $_POST["numero_cartao"];
$validade_cartao = $_POST["validade_cartao"];
$codigo_seguranca = $_POST["codigo_seguranca"];
$nome_titular = $_POST["nome_titular"];
$token = $_POST["token_car"];

$resultcar = mysqli_query($conexao, "SELECT * FROM pessoa WHERE token_car= '$token'");
$resultcarRow = mysqli_num_rows ($resultcar);


if ($resultcarRow == false){
    echo json_encode("n");

}else{
    mysqli_query($conexao, "UPDATE pessoa SET numero_cartao = '$numero_cartao' , validade_cartao = '$validade_cartao' , codigo_seguranca = '$codigo_seguranca' , nome_titular = '$nome_titular' WHERE token_car= '$token'");
    echo json_encode("s");
}

mysqli_close($conexao);
?>