<?php

session_start();

$conexao = mysqli_connect("localhost", "root", "", "projetoexpcriativa2");

$titulo = $_POST["titulo"];
$ano = $_POST["ano"];
$temporada = $_POST["temporada"];
$genero = $_POST["genero"];
$relevancia = $_POST["relevancia"];
$sinopse = $_POST["sinopse"];
$trailer = $_POST["trailer"];
$imagem = $_POST["imagem"];

mysqli_query($conexao, "INSERT INTO series(titulo, genero, ano, temporada, relevancia, sinopse, trailer, imagem) VALUES 
                ('$titulo', '$genero', '$ano', '$temporada', '$relevancia', '$sinopse', '$trailer', '$imagem')");






mysqli_close($conexao);


?>