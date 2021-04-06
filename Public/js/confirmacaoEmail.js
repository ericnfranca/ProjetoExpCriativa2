$(document).ready(function(){
    ColocarMask();
    
    $('#bEmail').click(function() {
        verificarVazios();
        fLocalComunicaServidorEmail();
            
    });
    

});

function ColocarMask() {
    $('#confirmacaoEmail').inputmask("email");
}

function verificarVazios() {
    var email = $('#confirmacaoEmail').val();
   
    if (email == '') {
        $("#labelEmail").css({"color": "#FA5858"})
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
                alert("E-mail validado com sucesso, prossiga para o login");
            }else{
                alert("Verifique o E-mail digitado");
            }

        }
    });
}