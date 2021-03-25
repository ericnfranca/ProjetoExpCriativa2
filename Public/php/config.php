<?php



define('DB_SERVER', 'localhost');

define('DB_USERNAME', 'root');

define('DB_PASSWORD', '');

define('DB_NAME', 'projetoexpcriativa2');

 



$conexao = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

 

// Check connection

if($conexao === false){

    die("ERROR: Não foi possivel conectar. " . mysqli_connect_error());

}

$nome = $_POST["nome"];
$data_nascimento = $_POST["sobrenome"];

echo $nome." ".$data_nascimento;


mysqli_query($conexao, "INSERT INTO pessoa(nome_completo, data_nascimento, email, senha, numero_cartao, validade_cartao, codigo_seguranca, nome_titular, cpf ) VALUES ()");

mysqli_close($conexao);



?>