<?php

session_start();
$conexao = mysqli_connect("localhost", "root", "", "projetoexpcriativa2");


$retorno["status"] = "";
$retorno["mensagem"]= "";



if(isset($_SESSION["id"]) ==  false){
    $retorno["status"] = "n";
    $retorno["mensagem"]= "não existe sessao";

}else{

    $segundos = time() - $_SESSION["inicio"];
    
    if ($segundos > $_SESSION["tempo_limite"]){
        unset($_SESSION["email"]);
        unset($_SESSION["inicio"]);
        unset($_SESSION["tempo_limite"]);
        unset($_SESSION["id"]);
        session_destroy();
        
        $retorno["status"] = "n";
        $retorno["mensagem"] = "a sessao expirou, logue novamente";

    }else{
        $_SESSION["inicio"] = time();
        $retorno["status"] = "s";
        $retorno["mensagem"]= "sessao renovada";
        
    }
}

if ($retorno["status"] == "n"){
    echo json_encode("n");
}else{
    echo json_encode("s");
}
?>