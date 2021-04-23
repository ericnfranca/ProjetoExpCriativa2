$(document).ready(function(){
    fLocalComunicaServidor();
    
});

function fLocalComunicaServidor() {


    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: "../public/php/index-sessao.php",
        success: function(retorno){

        }
    })
}