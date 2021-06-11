$(document).ready(function(){
    ColocarMascara();
    redimensionaImagemFilmes();
    redimensionaImagemSeries();
    $('#btnAddFilme').click(function() {
        filme = true;
        console.log(filme)
    })
    $('#btnAddSerie').click(function() {
        filme = false;
        console.log(filme)
    })

    $('#btnClose').click(function() {
        filme = null;
    })

    $('#btnSalvarFilme').click(function() {
        verificarVaziosFilme();
        if (verificarTudo() == true) {
            $('#alertBootstrapSuccess').show();
            EnviarFilmesServidor();
            limparInputs();
            filme = null;
            $("#modalFilme").modal("hide");
        } else {
            $('#alertBootstrapErrorFilme').show();
        }
    })

    $('#btnSalvarSerie').click(function() {
        verificarVaziosSerie();
        if (verificarTudo() == true) {
            $('#alertBootstrapSuccess').show();
            EnviarSeriesServidor();
            limparInputs();
            filme = null;
            $("#modalSerie").modal("hide");
        } else {
            $('#alertBootstrapErrorSerie').show();
        }
    })
});


var filme = null;


function ColocarMascara() {
    $("#ano").inputmask("9999");
    $("#duracao").inputmask("99:99:99");
    $("#anoSerie").inputmask("9999");
}

var arquivo;
var formData;

function redimensionaImagemFilmes(){
    $("#upload-image-filmes").change(function(){
        arquivo = document.getElementById("upload-image-filmes").files[0];

        formData = new FormData();
        formData.append("file", arquivo);

    });
    

}

function EnviarFilmesServidor() {
    var dur = $('#duracao').inputmask('unmaskedvalue');
    dur = dur.toString();

    var year = $('#ano').inputmask('unmaskedvalue');
    year = parseInt(year);

  
        
    var fullPath = document.getElementById('upload-image-filmes').value;
    if (fullPath) {
        var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        var filename = fullPath.substring(startIndex);
    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
        filename = filename.substring(1);
    }
    //alert(filename);
    }

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../Public/php/envia_filmes.php",
        data: {
            titulo: $('#titulo').val(),
            genero: $('#genero').val(),
            //ano: $('#ano').val().toString(),
            duracao: dur,
            ano: year,
            relevancia: $('#relevancia').val(),
            sinopse: $('#sinopse').val(),
            trailer: $('#trailer').val(),
            imagem: filename,
        },
        success: function(retorno) {
            console.log("deu boa");
        }
    });

    $.ajax({

        url: "../Public/php/envia_imagem.php",
        type:"post",
        data: formData,
        contentType: false,
        cache: false,
        processData: false,
        success: function(retorno){
            alert("imagem salva!!!");
        }
    });
    

   

}
function redimensionaImagemSeries() {
    $("#upload-image-series").change(function(){
        arquivo = document.getElementById("upload-image-series").files[0];

        formData = new FormData();
        formData.append("file", arquivo);
    });
}

function EnviarSeriesServidor() {

    
    
    var year = $('#anoSerie').inputmask('unmaskedvalue');
    year = parseInt(year);

    var temp = $('#temporada').inputmask('unmaskedvalue');
    temp = parseInt(temp);

    var fullPath = document.getElementById('upload-image-series').value;
    if (fullPath) {
        var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        var filename = fullPath.substring(startIndex);
    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
        filename = filename.substring(1);
    }
    alert(filename);
    }

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../Public/php/envia_series.php",
        data: {
            titulo: $('#tituloSerie').val(),
            genero: $('#generoSerie').val(),
            ano: year,
            temporada: temp,
            relevancia: $('#relevanciaSerie').val(),
            sinopse: $('#sinopseSerie').val(),
            trailer: $('#trailerSerie').val(),
            imagem: filename,
        },
        success: function(retorno) {

            
        }
    })

    $.ajax({

        url: "../Public/php/envia_imagem.php",
        type:"post",
        data: formData,
        contentType: false,
        cache: false,
        processData: false,
        success: function(retorno){

        }
    });
}

function verificarVaziosFilme() {
    var titulo = $('#titulo').val();
    var genero = $('#genero').val();
    var ano = $('#ano').val();
    var duracao = $('#duracao').val();
    var relevancia = $('#relevancia').val();
    var sinopse = $('#sinopse').val();
    var trailer = $('#trailer').val();

    if (titulo == '') {
        $("#labelTitulo").css({"color": "#FA5858"})
    } else {
        $("#labelTitulo").css({"color": ""})
    }
    if (genero == '') {
        $("#labelGenero").css({"color": "#FA5858"})
    } else {
        $('#labelGenero').css({"color": ""})
    }
    if (ano == '') {
        $("#labelAno").css({"color": "#FA5858"})
    } else {
        $('#labelAno').css({"color": ""})
    }
    if (duracao == '') {
        $("#labelDuracao").css({"color": "#FA5858"})
    } else {
        $('#labelDuracao').css({"color": ""})
    }
    if (relevancia == '') {
        $("#labelRelevancia").css({"color": "#FA5858"})
    } else {
        $('#labelRelevancia').css({"color": ""})
    }
    if (sinopse == '') {
        $("#labelSinopse").css({"color": "#FA5858"})
    } else {
        $('#labelSinopse').css({"color": ""})
    }
    if (trailer == '') {
        $("#labelTrailer").css({"color": "#FA5858"})
    } else {
        $('#labelTrailer').css({"color": ""})
    }
}

function verificarTudo() {
    var titulo = $('#titulo').val();
    var genero = $('#genero').val();
    var ano = $('#ano').val();
    var anoSerie = $('#anoSerie').val();
    var duracao = $('#duracao').val();
    var temporada = $('#temporada').val();
    var relevancia = $('#relevancia').val();
    var sinopse = $('#sinopse').val();
    var trailer = $('#trailer').val();
    var tituloSerie = $('#tituloSerie').val();
    var generoSerie = $('#generoSerie').val();
    var relevanciaSerie = $('#relevanciaSerie').val();
    var sinopseSerie = $('#sinopseSerie').val();
    var trailerSerie = $('#trailerSerie').val();


    if (filme == true) {
        if (titulo == "" || genero == "" || duracao == "" || relevancia == "" || sinopse == "" || 
                trailer == "" || ano == "") {
            return false;
        } else {
            return true;
        }
    } else {
        if (tituloSerie == "" || generoSerie == "" || temporada == "" || relevanciaSerie == "" || sinopseSerie == "" || 
                trailerSerie == "" || anoSerie == "") {
            return false;
            } 
        return true;
    }
}

function limparInputs() {
    $('#titulo').val("");
    $('#genero').val("");
    $('#ano').val("");
    $('#anoSerie').val("");
    $('#duracao').val("");
    $('#temporada').val("");
    $('#relevancia').val("");
    $('#sinopse').val("");
    $('#trailer').val("");
    $('#tituloSerie').val("");
    $('#generoSerie').val("");
    $('#relevanciaSerie').val("");
    $('#sinopseSerie').val("");
    $('#trailerSerie').val("");
}

function verificarVaziosSerie() {
    var titulo = $('#tituloSerie').val();
    var genero = $('#generoSerie').val();
    var ano = $('#anoSerie').val();
    var temporada = $('#temporada').val();
    var relevancia = $('#relevanciaSerie').val();
    var sinopse = $('#sinopseSerie').val();
    var trailer = $('#trailerSerie').val();


    if (titulo == '') {
        $("#labelTituloSerie").css({"color": "#FA5858"})
    } else {
        $("#labelTituloSerie").css({"color": ""})
    }
    if (genero == '') {
        $("#labelGeneroSerie").css({"color": "#FA5858"})
    } else {
        $('#labelGeneroSerie').css({"color": ""})
    }
    if (ano == '') {
        $("#labelAnoSerie").css({"color": "#FA5858"})
    } else {
        $('#labelAnoSerie').css({"color": ""})
    }
    if (temporada == '') {
        $("#labelTemporadaSerie").css({"color": "#FA5858"})
    } else {
        $('#labelTemporadaSerie').css({"color": ""})
    }
    if (relevancia == '') {
        $("#labelRelevanciaSerie").css({"color": "#FA5858"})
    } else {
        $('#labelRelevanciaSerie').css({"color": ""})
    }
    if (sinopse == '') {
        $("#labelSinopseSerie").css({"color": "#FA5858"})
    } else {
        $('#labelSinopseSerie').css({"color": ""})
    }
    if (trailer == '') {
        $("#labelTrailerSerie").css({"color": "#FA5858"})
    } else {
        $('#labelTrailerSerie').css({"color": ""})
    }
}