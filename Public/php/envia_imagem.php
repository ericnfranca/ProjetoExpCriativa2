<?php


/*$arquivo_nome = $_FILES["file"]["name"];

$arquivo = explode('.', $arquivo_nome);
$arquivo_ext = strtolower(end($arquivo));

if($arquivo_ext == "png"){
    $imagem = imagecreatefrompng($_FILES["file"]["tmp_name"]);

    imagepng($imagem, "../Public/img/$arquivo_nome");
}
*/
$arquivo_nome = $_FILES["file"]["name"];

	$arquivo = explode('.', $arquivo_nome);
	$arquivo_ext = strtolower(end($arquivo));


	$largura = 200;
	$altura = 200;


	if($arquivo_ext == "png"){

		$imagem_temp = imagecreatefrompng($_FILES["file"]["tmp_name"]);
		$largura_original = imagesx($imagem_temp);
		$altura_original = imagesy($imagem_temp);

		$porcentagem = (($largura * 100) / $largura_original) * 0.01;

		echo $porcentagem;

		$largura_nova = $largura_original * $porcentagem;
		$altura_nova = $altura_original * $porcentagem;

		$imagem_redimensionada = imagecreatetruecolor($largura_nova, $altura_nova);

		imagecopyresampled($imagem_redimensionada, $imagem_temp, 0, 0, 0, 0, $largura_nova, $altura_nova, $largura_original, $altura_original);

		echo $arquivo_nome;
		imagepng($imagem_redimensionada, "../img/$arquivo_nome");
}

?>