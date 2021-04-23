<?php
$conexao = mysqli_connect("localhost", "root", "guimateus@2002", "projetoexpcriativa2");


$nome_completo = $_POST["nome_completo"];
$data_nascimento = $_POST["data_nascimento"];
$email = $_POST["email"];
$senha = $_POST["senha"];
$numero_cartao = $_POST["numero_cartao"];
$validade_cartao = $_POST["validade_cartao"];
$codigo_seguranca = $_POST["codigo_seguranca"];
$nome_titular = $_POST["nome_titular"];
$cpf = $_POST["cpf"];
$token = $_POST["token"];

mysqli_query($conexao, "INSERT INTO pessoa(nome_completo, data_nascimento, email, validacao_email, senha_hash_sha256, numero_cartao, validade_cartao, codigo_seguranca, nome_titular, cpf, token) VALUES 
                ('$nome_completo', '$data_nascimento', '$email', 'n', '$senha', '$numero_cartao', '$validade_cartao', '$codigo_seguranca', '$nome_titular', '$cpf', '$token')");



mysqli_close($conexao);

?>