$(document).ready(function(){
    ColocarMascara();

    $("#email").on("keyup", function () {
        labelEmail();
    })
    
    $("#email").on("keydown", function () {
        labelEmail();
    })
    
    $('#BotaoAcessar').click(function() {
        verificarVazios();
        if(verificarTudo() == true){
            fLocalComunicaServidor();
        }else{
            $('#alertBootstrapErrorLog').show();
        }
         //limparInputs();
    })
    $('#bBotaoCriar').click(function() {
        window.location.href = ".."
    })
});

function labelEmail() {
    var emailEscrito = $("#email").val()
    if (emailEscrito != "") {
        $("#divEmailLogin").removeClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label");
        $("#divEmailLogin").addClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty");
    } else {
        $("#divEmailLogin").removeClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty");
        $("#divEmailLogin").addClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label");
    }
}

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

function verificarTudo() {
    var email = $('#email').val();
    var senha = $('#senha').val();
    
    if (email == "" || senha == "" ) {
        return false
    }
    return true;
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
        type: "POST",
        dataType: "json",
        url: "../Public/php/configLogin.php",
        data: {
            email: $("#email").val(),
            senha: senha_hash.toString(),
        },
        success: function(retorno) {
            if (retorno == "s"){ 
                alert("Usuário Cadastrado");
            }else{
                $('#alertBootstrapErrorLog').show();
            }
        }
    })
}