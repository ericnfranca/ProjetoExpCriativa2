$(document).ready(function(){
    ColocarMascara();

    $("#emailCar").on("keyup", function () {
        labelEmail();
    })

    $('#bBotaoRedefineDados').click(function() {
        verificarVazios();
        if(verificarVazios() != false){
            fLocalComunicaServidor();
        }else{
            $('#alertBootstrapErrorRed').show();
        }
        //limparInputs();
    })
    $('#bVoltarIndex').click(function() {
        window.location.href = '../views/index.html'
    })
});

function labelEmail() {
    var emailEscrito = $("#emailCar").val()
    if (emailEscrito != "") {
        $("#divEmailCar").removeClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label");
        $("#divEmailCar").addClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty");
    } else {
        $("#divEmailCar").removeClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty");
        $("#divEmailCar ").addClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label");
    }
}

function ColocarMascara() {
    $("#emailCar").inputmask("email");
}

function verificarVazios() {
    var email = $('#emailCar').val();

    if (email == '') {
        $("#labelEmail").css({"color": "#FA5858"})
        return false
    } else {
        $('#labelEmail').css({"color": ""})
    }
}

function limparInputs() {
    $('#emailCar').val("");
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
        url: "../public/php/configRedefinirDadosCartao.php",
        data: {
            email: $('#emailCar').val(),
            token_car: token.toString(),
        },
        success: function(retorno) {
            if (retorno == "s"){ 
                fLocalComunicaServidorEnviaEmail();
                $('#alertBootstrapSuccessRed').show();
            }else{
                $('#alertBootstrapErrorRed').show();
            }
        }
    })
}

function fLocalComunicaServidorEnviaEmail(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../public/php/enviar-email-car.php",
        data: {
            email: $('#emailCar').val(),
            token_car: token.toString(),
        },
        success: function(retorno) {
        }
    })
}