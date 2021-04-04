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

mysqli_query($conexao, "INSERT INTO pessoa(nome_completo, data_nascimento, email, validacao_email, senha_hash_sha256, numero_cartao, validade_cartao, codigo_seguranca, nome_titular, cpf) VALUES 
                ('$nome_completo', '$data_nascimento', '$email', 'n', '$senha', '$numero_cartao', '$validade_cartao', '$codigo_seguranca', '$nome_titular', '$cpf')");



// mysqli_close($conexao);



date_default_timezone_set('Etc/UTC');


require '../Public/php/PHPMailer/PHPMailerAutoload.php';

$tituloEmail = "Confirmação de Cadastro";

$message = 'E-mail cadastrado com sucesso!';

$mail= new PHPMailer();
$mail->IsSMTP(); 
$mail->CharSet = 'UTF-8';   
$mail->SMTPDebug = 2;       // 0 = nao mostra o debug, 2 = mostra o debug
$mail->SMTPAuth = true;     
$mail->SMTPSecure = 'ssl';  
$mail->Host = 'smtp.gmail.com'; 
$mail->Port = 465; 
$mail->Username = 'nextfilmes.exp@gmail.com'; 
$mail->Password = 'nextfilmes123456';
$mail->SetFrom('nextfilmes.exp@gmail.com', 'NextFilmes');
$mail->addAddress('josian.brais@forloans.org','');
$mail->Subject = $tituloEmail;
$mail->msgHTML($message);
$mail->send();

// Configure o Gmail para permitir aplicativos de terceiro 
// https://myaccount.google.com/lesssecureapps
mysqli_close($conexao);
?>