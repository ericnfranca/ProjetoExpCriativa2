$(document).ready(function(){
    fLocalComunicaServidor();
    
});
function fLocalComunicaServidor() {
    
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: "../public/php/index-sessao.php",
        
        success: function(retorno){
            if(retorno == "n"){ 
                window.location.href = '../Views/TelaLogin.html'
            }
        }
    })
}