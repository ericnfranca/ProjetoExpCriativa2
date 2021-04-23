<?php
$conexao = mysqli_connect("localhost", "root", "guimateus@2002", "projetoexpcriativa2");

$confirmacaoToken = $_POST["confirmacao_token"];

$resposta = mysqli_query($conexao, "SELECT * FROM pessoa WHERE token= '$confirmacaoToken'");
$respostaRow = mysqli_num_rows ($resposta);

if ($respostaRow == true){
    mysqli_query($conexao, "UPDATE pessoa SET validacao_email= 's' WHERE token='$confirmacaoToken'");
    echo json_encode("s");
}else{
    echo json_encode("n"); 

}

mysqli_close($conexao);
?>

