$(document).ready(function(){
    ColocarMascara();

    $("#emailRed").on("keyup", function () {
        labelEmail();
    })

    $('#bBotaoRedefineSenha').click(function() {
        verificarVazios();
        if(verificarVazios() != false){
            fLocalComunicaServidor();
        }else{
            $('#alertBootstrapErrorRed').show();
        }
        //limparInputs();
    })
    $('#bBotaoVoltar').click(function() {
        window.location.href = '../Views/TelaLogin.html'
    })
});

function labelEmail() {
    var emailEscrito = $("#emailRed").val()
    if (emailEscrito != "") {
        $("#divEmailRed").removeClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label");
        $("#divEmailRed").addClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty");
    } else {
        $("#divEmailRed").removeClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty");
        $("#divEmailRed ").addClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label");
    }
}

function ColocarMascara() {
    $("#emailRed").inputmask("email");
}

function verificarVazios() {
    var email = $('#emailRed').val();

    if (email == '') {
        $("#labelEmail").css({"color": "#FA5858"})
        return false
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
