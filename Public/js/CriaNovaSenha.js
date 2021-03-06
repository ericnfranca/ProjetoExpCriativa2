$(document).ready(function(){

    $('#bBotaoCriaSenha').click(function() {
        verificarVazios();
        if (verificarTudo() == true){
            fLocalComunicaServidor();
            //limparInputs();
        }else{
            $('#alertBootstrapErrorCria').show();
        }
        
    });
    $('#bBotaoVoltarLogin').click(function() {
        window.location.href = '../Views/TelaLogin.html'
    })
});


function verificarVazios() {
    var senha = $('#criaSenha').val();
    var confirmarSenha = $('#confirmaCriaSenha').val();
    var confirmarToken = $('#confirmaTokenRed').val();

    if (senha == '') {
        $("#labelCriaSenha").css({"color": "#FA5858"})
    } else {
        $('#labelCriaSenha').css({"color": ""})
    }
    if (confirmarSenha == '') {
        $("#labelConfirmaCriaSenha").css({"color": "#FA5858"})
    } else {
        $('#labelConfirmaCriaSenha').css({"color": ""})
    }
    if (confirmarToken == '') {
        $("#labelConfirmaTokenRed").css({"color": "#FA5858"})
    } else {
        $('#labelConfirmaTokenRed').css({"color": ""})
    }

}

function limparInputs() {
    $('#criaSenha').val("");
    $('#confirmaCriaSenha').val("");
    $('#confirmaTokenRed').val("");
}

function conSenha() {
    var senha = $('#criaSenha').val();
    var confirmarSenha = $('#confirmaCriaSenha').val();

    if(senha != "" & confirmarSenha != "" && senha == confirmarSenha){
        $('#labelCriaSenha').css({"color": ""})
        $("#labelConfirmaCriaSenha").css({"color": ""})
        return true
    }else if (senha != confirmarSenha){
        $('#criaSenha').css({"color": "#FA5858"})
        $('#confirmaCriaSenha').css({"color": "#FA5858"})
        $('#labelCriaSenha').css({"color": "#FA5858"})
        $("#labelConfirmaCriaSenha").css({"color": "#FA5858"})
        return false
    }
}

function verificarTudo() {
    var senha = $('#criaSenha').val();
    var confirmarSenha = $('#confirmaCriaSenha').val();
    var confirmarToken = $('#confirmaTokenRed').val();

    if (senha == "" || confirmarSenha == "" || confirmarToken == ""){
        return false
    }else{
        if (conSenha() == true){
            return true
        }else{
            return false
        }
    }
}

function hashMD5(){    
    var senha_hash_md5 = $.MD5($('#criaSenha').val());
    return(senha_hash_md5);
    
}

function fLocalComunicaServidor() {
    var senha_hash = hashMD5();
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../Public/php/criaNovaSenha.php",
        data: {
            senha_hash_sha256: senha_hash.toString(),
            token_red: $('#confirmaTokenRed').val(),
        },
        success: function(retorno) {
            if (retorno == "s"){ 
                $('#alertBootstrapSuccessCria').show();
            }else{
                $('#alertBootstrapErrorCria').show();
            }
        }
    })
}


