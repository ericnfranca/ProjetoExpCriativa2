$(document).ready(function() {
    ColocarMascara();

    $("#novoNumero").on("keyup", function () {
        labelnovoNumero();
    })

    $("#novoValidade").on("keyup", function () {
        labelnovoValidade();
    })

    $("#novoCod").on("keyup", function () {
        labelnovoCod();
    })

    $("#novoNumero").on("keydown", function () {
        labelnovoNumero();
    })

    $("#novoValidade").on("keydown", function () {
        labelnovoValidade();
    })

    $("#novoCod").on("keydown", function () {
        labelnovoCod();
    })

    $('#bMudaDadosCartao').click(function() {
        verificarVazios();
        if (verificarTudo() == true){
            fLocalComunicaServidor();
        }
        
    });
    $('#bVoltarPagPrinc').click(function() {
        window.location.href = '../views/index.html'
    })
});

function labelnovoNumero() {
    var numCartao = $("#novoNumero").val();
    if (numCartao != "") {
        $("#divNumCartaoNOVO").removeClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label");
        $("#divNumCartaoNOVO").addClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty");
    } else {
        $("#divNumCartaoNOVO").removeClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty");
        $("#divNumCartaoNOVO").addClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label");
    }
}

function labelnovoValidade() {
    var validadeCartao = $("#novoValidade").val();
    if (validadeCartao != "") {
        $("#divValCartaoNOVO").removeClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label");
        $("#divValCartaoNOVO").addClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty");
    } else {
        $("#divValCartaoNOVO").removeClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty");
        $("#divValCartaoNOVO").addClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label");
    }
}

function labelnovoCod() {
    var codCartao = $("#novoCod").val();
    if (codCartao != "") {
        $("#divCodCartaoNOVO").removeClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label");
        $("#divCodCartaoNOVO").addClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty");
    } else {
        $("#divCodCartaoNOVO").removeClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty");
        $("#divCodCartaoNOVO").addClass("mdl-textfield mdl-js-textfield mdl-textfield--floating-label");
    }
}


function ColocarMascara() {
    $("#novoNumero").inputmask("9999 9999 9999 9999");
    $("#novoValidade").inputmask("99/99");
    $("#novoCod").inputmask("999");
}

function verificarVazios() {
    var numero = $('#novoNumero').val();
    var validade = $('#novoValidade').val();
    var codigo = $('#novoCod').val();
    var nome = $('#novoNome').val();
    var confirmaToken = $('#confirmaTokenCar').val();

    if (numero == '') {
        $("#labelnovoNumero").css({"color": "#FA5858"})
    } else {
        $('#labelnovoNumero').css({"color": ""})
    }
    if (validade == '') {
        $("#labelnovoValidade").css({"color": "#FA5858"})
    } else {
        $('#labelnovoValidade').css({"color": ""})
    }
    if (codigo == '') {
        $("#labelnovoCod").css({"color": "#FA5858"})
    } else {
        $('#labelnovoCod').css({"color": ""})
    }
    if (nome == '') {
        $("#labelnovoNome").css({"color": "#FA5858"})
    } else {
        $('#labelnovoNome').css({"color": ""})
    }
    if (confirmaToken == '') {
        $("#labelconfirmaTokenCar").css({"color": "#FA5858"})
    } else {
        $('#labelconfirmaTokenCar').css({"color": ""})
    }

}

function limparInputs() {
    $('#novoNumero').val("");
    $('#novoValidade').val("");
    $('#novoCod').val("");
    $('#novoNome').val("");
    $('#confirmaTokenCar').val("");
}

function verificarTudo() {
    var numero = $('#novoNumero').val();
    var validade = $('#novoValidade').val();
    var codigo = $('#novoCod').val();
    var nome = $('#novoNome').val();
    var confirmaToken = $('#confirmaTokenCar').val();

    if (numero == "" || validade == "" || codigo == "" || nome == "" || confirmaToken == "") {
        return false
    }
    return true;
}

function fLocalComunicaServidor() {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../public/php/MudaDadosCartao.php",
        data: {
            numero_cartao: $('#novoNumero').val(),
            validade_cartao: $('#novoValidade').val(),
            codigo_seguranca: $('#novoCod').val(),
            nome_titular: $('#novoNome').val(),
            token_car: $('#confirmaTokenCar').val(),
        },
        success: function(retorno) {
            if (retorno == "s"){ 
                alert("trocamos os dados do cartao");
            }else{
                alert("Usuário não cadastrado");
            }
        }
    })
}