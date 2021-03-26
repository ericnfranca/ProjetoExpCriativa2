<?php
$conexao = mysqli_connect("localhost", "root", "", "projetoexpcriativa2");


$nome_completo = $_POST["nome_completo"];
$data_nascimento = $_POST["data_nascimento"];
$email = $_POST["email"];
$senha = $_POST["senha"];
$numero_cartao = $_POST["numero_cartao"];
$validade_cartao = $_POST["validade_cartao"];
$codigo_seguranca = $_POST["codigo_seguranca"];
$nome_titular = $_POST["nome_titular"];
$cpf = $_POST["cpf"];



mysqli_query($conexao, "INSERT INTO pessoa(nome_completo, data_nascimento, email, senha, numero_cartao, validade_cartao, codigo_seguranca, nome_titular, cpf) VALUES 
                ('$nome_completo', '$data_nascimento', '$email', '$senha', '$numero_cartao', '$validade_cartao', '$codigo_seguranca', '$nome_titular', '$cpf')");



mysqli_close($conexao);



?>