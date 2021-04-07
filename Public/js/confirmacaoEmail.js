$(document).ready(function(){
    ColocarMask();
    
    $('#bEmail').click(function() {
        verificarVazios();
        fLocalComunicaServidorEmail();
     //   if (fLocalComunicaServidorEmail() = "s"){
       //     $('#alertBootstrapSuccessEmail').show();   
       // } 
    });
    

});

function ColocarMask() {
    $('#confirmacaoEmail').inputmask("email");
}

function verificarVazios() {
    var email = $('#confirmacaoEmail').val();

    if (email == '') {
        $("#labelEmail").css({"color": "#FA5858"})
        $('#alertBootstrapErrorVazio').show();
    } else {
        $('#labelEmail').css({"color": ""})
    }
}
function fLocalComunicaServidorEmail(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../Public/php/confirmacaoEmail.php",
        data: {
            confirmacao_email: $("#confirmacaoEmail").val(),
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