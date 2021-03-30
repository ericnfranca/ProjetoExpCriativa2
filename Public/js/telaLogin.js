$(document).ready(function(){
    ColocarMascara();

    $('#BotaoAcessar').click(function() {
        verificarVazios();
         //limparInputs();
    })
    $('#bBotaoCriar').click(function() {
        window.location.href = ".."
    })
});

function ColocarMascara() {
    $("#email").inputmask("email");
}

function verificarVazios() {
    var email = $('#email').val();
    var senha = $('#senha').val();

    if (email == '') {
        $("#labelEmail").css({"color": "#FA5858"})
    } else {
        $('#labelEmail').css({"color": ""})
    }
    if (senha == '') {
        $("#labelSenha").css({"color": "#FA5858"})
    } else {
        $('#labelSenha').css({"color": ""})
    }
}

function limparInputs() {
    $('#email').val("");
    $('#senha').val("");
}

function hashMD5(){    
    var senha_hash_md5 = $.MD5($('#senha').val());
    return(senha_hash_md5);
    
}
function fLocalComunicaServidor() {
    var senha_hash = hashMD5();
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "../Public/php/configLogin.php",
        data: {
            email: $("#email").val(),
            senha: senha_hash.toString(),
        },
        success: function(retorno) {

        }
    })
}