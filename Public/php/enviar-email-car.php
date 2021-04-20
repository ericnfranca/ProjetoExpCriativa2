<?php
date_default_timezone_set('Etc/UTC');

$email = $_POST["email"];
$token = $_POST["token_car"];

require '../PHPMailer/PHPMailerAutoload.php';

$tituloEmail = "Redefinir dados do cartao";

//$message = 'Para confirmar o cadastro, clique no link abaixo <br> http://localhost/git/ProjetoExpCriativa2/Views/ConfirmacaoEmail.html';

//mudar caminho linha 21
$message = "<!DOCTYPE html>
<html lang='en'>
<head>
</head>
<body>
            <div id='email' value='$email' hidden>
            </div>
            <a>Para redefinir os seus dados do cartao clique <a  href='http://localhost/ProjetoExpCriativa3p/ProjetoExpCriativa2/Views/MudaDadosCartao.html'>aqui</a>.</a>
            Seu token para redefinir os dados do cartao: '$token'.
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