<?php
date_default_timezone_set('Etc/UTC');

$email = $_POST["email"];


require '../PHPMailer/PHPMailerAutoload.php';

$tituloEmail = "Confirmação de Cadastro";

$message = 'E-mail cadastrado com sucesso!';

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