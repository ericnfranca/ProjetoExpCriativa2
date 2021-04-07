$(document).ready(function(){
    ColocarMascara();
    
    $('#divBotao').click(function() {
        verificarVazios();
        if (verificarTudo() == true) {
            $('#alertBootstrapSuccess').show();
            hashMD5();    
            fLocalComunicaServidor();
            fLocalEnviaEmail();
            //limparInputs();


        } else {
            $('#alertBootstrapError').show();
        }
    })
    

});


function ColocarMascara() {
    $("#cpf").inputmask("999.999.999-99");
    $("#email").inputmask("email");
    $("#dataNascimento").inputmask("99/99/9999");
    $("#numCartao").inputmask("9999 9999 9999 9999");
    $("#validadeCartao").inputmask("99/99");
    $("#codCartao").inputmask("999");
}

function verificarVazios() {
    var nomeCompleto = $('#nomeCompleto').val();
    var dataNascimento = $('#dataNascimento').val();
    var email = $('#email').val();
    var senha = $('#senha').val();
    var ConfSenha = $('#confSenha').val();
    var numCartao = $('#numCartao').val();
    var validadeCartao = $('#validadeCartao').val();
    var CodCartao = $('#codCartao').val();
    var nomeTitular = $('#nomeTitular').val();
    var cpf = $('#cpf').val();

    if (nomeCompleto == '') {
        //$('#nome').addClass("campo-login-erro")
        $("#labelNomeCompleto").css({"color": "#FA5858"})
    } else {
        $("#labelNomeCompleto").css({"color": ""})
        //$('#nome').removeClass("campo-login-erro")
    }
    if (dataNascimento == '') {
        $("#labelDataNascimento").css({"color": "#FA5858"})
    } else {
        $('#labelDataNascimento').css({"color": ""})
    }
    if (email == '') {
        $("#labelEmail").css({"color": "#FA5858"})
    } else {
        $('#labelEmail').css({"color": ""})
    }
    if (ConfSenha == '') {
        $("#labelConfSenha").css({"color": "#FA5858"})
    } else {
        $('#labelConfSenha').css({"color": ""})
    }
    if (senha == '') {
        $("#labelSenha").css({"color": "#FA5858"})
    } else {
        $('#labelSenha').css({"color": ""})
    }
    if (numCartao == "") {
        $("#labelNumCartao").css({"color": "#FA5858"})
    } else {
        $('#labelNumCartao').css({"color": ""})
    }
    if (validadeCartao == "") {
        $("#labelValidadeCartao").css({"color": "#FA5858"})
    } else {
        $('#labelValidadeCartao').css({"color": ""})
    }
    if (nomeTitular == "") {
        $("#labelNomeTitular").css({"color": "#FA5858"})
    } else {
        $('#labelNomeTitular').css({"color": ""})
    }
    if (cpf == "") {
        $("#labelCpf").css({"color": "#FA5858"})
    } else {
        $('#labelCpf').css({"color": ""})
    }
    if (CodCartao == "") {
        $("#labelCodCartao").css({"color": "#FA5858"})
    } else {
        $('#labelCodCartao').css({"color": ""})
    }
}

function limparInputs() {
    $('#nomeCompleto').val("");
    $('#dataNascimento').val("");
    $('#email').val("");
    $('#senha').val("");
    $('#confSenha').val("");
    $('#numCartao').val("");
    $('#validadeCartao').val("");
    $('#codCartao').val("");
    $('#nomeTitular').val("");
    $('#cpf').val("");
}

function verificarTudo() {
    var nomeCompleto = $('#nomeCompleto').val();
    var dataNascimento = $('#dataNascimento').val();
    var email = $('#email').val();
    var senha = $('#senha').val();
    var ConfSenha = $('#confSenha').val();
    var numCartao = $('#numCartao').val();
    var validadeCartao = $('#validadeCartao').val();
    var CodCartao = $('#codCartao').val();
    var nomeTitular = $('#nomeTitular').val();
    var cpf = $('#cpf').val();

    if (nomeCompleto == "" || dataNascimento == "" || email == "" || senha == "" || senha == "" || ConfSenha == "" || 
            numCartao == "" || validadeCartao == "" || CodCartao == "" || nomeTitular == "" || cpf == "") {
        return false
    } else {
        if (confirmarSenha() == true) {
            return true
        } else {
            return false
        }
    }
}

function confirmarSenha() {
    var senha = $('#senha').val();
    var ConfSenha = $('#confSenha').val();
    
    if (senha != "" & ConfSenha != "" && senha == ConfSenha) {
        $('#labelSenha').css({"color": ""})
        $("#labelConfSenha").css({"color": ""})
        return true
    } else if (senha != confirmarSenha){
        $('#senha').css({"color": "#FA5858"})
        $('#confSenha').css({"color": "#FA5858"})
        $('#labelSenha').css({"color": "#FA5858"})
        $("#labelConfSenha").css({"color": "#FA5858"})
        return false
    }

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
        url: "../Public/php/config.php",
        data: {
            nome_completo: $("#nomeCompleto").val(),
            data_nascimento: $("#dataNascimento").val(),
            email: $("#email").val(),
            senha: senha_hash.toString(),
            numero_cartao: $("#numCartao").val(),
            validade_cartao: $("#validadeCartao").val(),
            codigo_seguranca: $("#codCartao").val(),
            nome_titular: $("#nomeTitular").val(),
            cpf: $("#cpf").val(),
        },
        success: function(retorno) {

        }
    })
}

function fLocalEnviaEmail(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../Public/php/enviar-email.php",
        data: {
            email: $("#email").val(),
        },
        success: function(retorno) {
        }
    })
}