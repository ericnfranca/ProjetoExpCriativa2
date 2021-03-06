$(document).ready(function(){
    ColocarMascara();
    
    $("#email").on("keyup", function () {
        labelEmail();
    })

    $("#dataNascimento").on("keyup", function () {
        labelDataNascimento();
    })

    $("#cpf").on("keyup", function () {
        labelCpf();
    })

    $("#numCartao").on("keyup", function () {
        labelNumCartao();
    })

    $("#validadeCartao").on("keyup", function () {
        labelValidadeCartao();
    })

    $("#codCartao").on("keyup", function () {
        labelCodCartao();
    })

    $("#email").on("keydown", function () {
        labelEmail();
    })

    $("#dataNascimento").on("keydown", function () {
        labelDataNascimento();
    })

    $("#cpf").on("keydown", function () {
        labelCpf();
    })

    $("#numCartao").on("keydown", function () {
        labelNumCartao();
    })

    $("#validadeCartao").on("keydown", function () {
        labelValidadeCartao();
    })

    $("#codCartao").on("keydown", function () {
        labelCodCartao();
    })

    
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

function labelEmail() {
    var emailEscrito = $("#email").val()
    if (emailEscrito != "") {
        $("#divEmail").removeClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label");
        $("#divEmail").addClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty");
    } else {
        $("#divEmail").removeClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty");
        $("#divEmail").addClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label");
    }
}

function labelDataNascimento() {
    var data = $("#dataNascimento").val()
    if (data != "") {
        $("#divData").removeClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label");
        $("#divData").addClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty");
    } else {
        $("#divData").removeClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty");
        $("#divData").addClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label");
    }
}

function labelCpf() {
    var cpf = $("#cpf").val()
    if (cpf != "") {
        $("#divCpf").removeClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label");
        $("#divCpf").addClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty");
    } else {
        $("#divCpf").removeClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty");
        $("#divCpf").addClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label");
    }
}

function labelNumCartao() {
    var numCartao = $("#numCartao").val()
    if (numCartao != "") {
        $("#divNumCartao").removeClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label");
        $("#divNumCartao").addClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty");
    } else {
        $("#divNumCartao").removeClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty");
        $("#divNumCartao").addClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label");
    }
}

function labelValidadeCartao() {
    var validadeCartao = $("#validadeCartao").val()
    if (validadeCartao != "") {
        $("#divValidadeCartao").removeClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label");
        $("#divValidadeCartao").addClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty");
    } else {
        $("#divValidadeCartao").removeClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty");
        $("#divValidadeCartao").addClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label");
    }
}

function labelCodCartao() {
    var codCartao = $("#codCartao").val()
    if (codCartao != "") {
        $("#divCodCartao").removeClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label");
        $("#divCodCartao").addClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty");
    } else {
        $("#divCodCartao").removeClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty");
        $("#divCodCartao").addClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label");
    }
}

var token = gerarToken();

function gerarToken() {
    var token = Math.random().toString(16).substr(2);
    return token;
}


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
        $("#labelNomeCompleto").css({"color": "#FA5858"})
    } else {
        $("#labelNomeCompleto").css({"color": ""})
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
    //var token = gerarToken();
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
            token: token.toString(),
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
            token: token.toString(),
        },
        success: function(retorno) {
        }
    })
}