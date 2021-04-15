$(document).ready(function(){
    
    $('#bEmail').click(function() {
        verificarVazios();
        fLocalComunicaServidorEmail();
     //   if (fLocalComunicaServidorEmail() = "s"){
       //     $('#alertBootstrapSuccessEmail').show();   
       // } 
    });
    

});

function verificarVazios() {
    var token = $('#confirmacaoToken').val();

    if (token == '') {
        $("#labelToken").css({"color": "#FA5858"})
        $('#alertBootstrapErrorVazio').show();
    } else {
        $('#labelToken').css({"color": ""})
    }
}
function fLocalComunicaServidorEmail() {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../Public/php/confirmacaoEmail.php",
        data: {
            confirmacao_token: $("#confirmacaoToken").val(),
        },
        success: function(retorno) {
            if(retorno == "s"){
                $('#alertBootstrapSuccessEmail').show();
            }else{
                $('#alertBootstrapErrorEmail').show();
            }

        }
    });
}