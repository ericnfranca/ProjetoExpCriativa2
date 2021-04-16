$(document).ready(function(){
    ColocarMascara();

    $('#bBotaoRedefineSenha').click(function() {
        verificarVazios();
        fLocalComunicaServidor();
        //limparInputs();
    })
    $('#bBotaoVoltar').click(function() {
        window.location.href = '../Views/TelaLogin.html'
    })
});

function ColocarMascara() {
    $("#emailRed").inputmask("email");
}

function verificarVazios() {
    var email = $('#emailRed').val();

    if (email == '') {
        $("#labelEmail").css({"color": "#FA5858"})
    } else {
        $('#labelEmail').css({"color": ""})
    }
}

function limparInputs() {
    $('#emailRed').val("");
}
var token = gerarTokenEmail();

function gerarTokenEmail() {
    var token = Math.random().toString(16).substr(2);    
    return token;
}

function fLocalComunicaServidor() {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../Public/php/configRedefinirSenhaEmail.php",
        data: {
            email: $('#emailRed').val(),
            token_red: token.toString(),
        },
        success: function(retorno) {
            if (retorno == "s"){ 
                fLocalComunicaServidorEnviaEmail();
                alert("enviamos email");
            }else{
                alert("Usuário não cadastrado");
            }
        }
    })
}

function fLocalComunicaServidorEnviaEmail(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../Public/php/enviar-email-rec.php",
        data: {
            email: $('#emailRed').val(),
            token_red: token.toString(),
        },
        success: function(retorno) {
        }
    })
}
