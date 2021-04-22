<?php
date_default_timezone_set('Etc/UTC');

$email = $_POST["email"];
$token = $_POST["token_red"];

require '../PHPMailer/PHPMailerAutoload.php';

$tituloEmail = "Redefinir Senha";

//$message = 'Para confirmar o cadastro, clique no link abaixo <br> http://localhost/git/ProjetoExpCriativa2/Views/ConfirmacaoEmail.html';

$message = "<!DOCTYPE html>
<html lang='en'>
<head>
</head>
<body>
            <div id='email' value='$email' hidden>
            </div>
            <a>Para redefinir sua senha clique <a  href='http://localhost/git/ProjetoExpCriativa2/Views/CriaNovaSenha.html'>aqui</a>.</a>
            Seu token para redefinir sua senha é: '$token'.
</body>
</html>";

$mail= new PHPMailer; 
$mail->IsSMTP(); 
$mail->CharSet = 'UTF-8';   
$mail->SMTPDebug = 2;       // 0 = nao mostra o debug, 2 = mostra o debug
$mail->SMTPAuth = true;     
$mail->SMTPSecure = 'ssl';  
$mail->Host = 'smtp.gmail.com'; 
$mail->Port = 465; 
$mail->Username = 'nextfilmes.exp'; 
$mail->Password = 'nextfilmes123456';
$mail->SetFrom('nextfilmes.exp@gmail.com', 'NextFilmes');
$mail->addAddress($email,'');
$mail->Subject = $tituloEmail;
$mail->msgHTML($message);

$mail->send();
?>