<?php
$conexao = mysqli_connect("localhost", "root", "", "projetoexpcriativa2");

$confirmacaoEmail = $_POST["confirmacao_email"];

$resposta = mysqli_query($conexao, "SELECT * FROM pessoa WHERE email= '$confirmacaoEmail'");
$respostaRow = mysqli_num_rows ($resposta);

if ($respostaRow == true){
    mysqli_query($conexao, "UPDATE pessoa SET validacao_email= 's' WHERE email='$confirmacaoEmail'");
    echo json_encode("s");
}else{
    echo json_encode("n"); 

}

mysqli_close($conexao);
?>

