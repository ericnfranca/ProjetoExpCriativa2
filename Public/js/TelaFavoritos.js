$(document).ready(function() {
    fLocalComunicaServidor();
    RecebeUsuarioId();
    RecebeFilmesFavoritos();
    ReceberSeriesFavoritas();

});
var idPessoa = null;
var idFilme = null;
var idSerie = null;

function RecebeUsuarioId() {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../Public/php/usuarioId.php",
        success: function(retorno) {
           idPessoa = retorno;
        }
    })
}

function RemoveFavoritos(id_filme) {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../Public/php/remove_favoritos.php",
        data: {
            id_filme : id_filme,
        },
        success: function(retorno) {
        }
    })
}

function RemoveFavoritosSeries(id_serie) {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../Public/php/remove_favoritos_series.php",
        data: {
            id_serie : id_serie,
        },
        success: function(retorno) {
        }
    })
}

function fLocalComunicaServidor() {
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: "../public/php/index-sessao.php",
        success: function(retorno){
            if(retorno == "n"){ 
                window.location.href = '../Views/TelaLogin.html'
            }
        }
    })
}

function RecebeFilmesFavoritos() {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../Public/php/recebe_favoritos.php",
        success: function(retorno) {
            mostrarFilmes(JSON.stringify(retorno));
        }
    })
}


function mostrarFilmes(param) {
    var auxiliar = JSON.parse(param);

    var array = auxiliar.map(function (obj) {  return [obj.ano, obj.duracao, obj.genero, obj.id, obj.imagem, obj.relevancia, obj.sinopse, obj.titulo, obj.trailer]});

    $(".produtos").html("")
    for (var i = 0; i < array.length; i++) {
        var conteudo = ""
        
        conteudo += '<div class="card" style="width: 18rem;">'
        conteudo +=     '<img src="../Public/img/' + array[i][4] + '" class="card-img-top" alt="...">'
        conteudo +=     '<div class="card-body">'
        conteudo +=         '<h5 class="card-title">' + array[i][7] + '</h5>'
        conteudo +=         '<p class="card-text"> Gênero: ' + array[i][2] + '</p>'
        conteudo +=         '<p class="card-text"> Ano: ' + array[i][0] + '</p>'
        conteudo +=         '<br>'
        conteudo +=         '<button type="button" class="btn btn-primary" id="btnMaisInfos" data-toggle="modal" id_filme="' + i + '" data-target="#exampleModalCenter">Mais Informações</button>'
        conteudo +=         '<br>'
        conteudo +=         '<button type="button" class="btn btn-danger" id="btnRemove" id_filme="' + array[i][3] + '" data-target="#exampleModalCenter">Remover</button>'
        conteudo +=     '</div>'
        conteudo += '</div>'

         $(".produtos").append(conteudo)
    }
    $(".btn-danger").click(function() {
        var id = $(this).attr("id_filme")
        id = parseInt(id);
        RemoveFavoritos(id)
    })

    $(".btn-primary").click(function() {
        var id = $(this).attr("id_filme")
        idFilme = id;
        mostrarModal(param, id)
    })
}


function mostrarModal(param, id) {
    console.log(id)
    var auxiliar = JSON.parse(param);

    var array = auxiliar.map(function (obj) {  return [obj.ano, obj.duracao, obj.genero, obj.id, obj.imagem, obj.relevancia, obj.sinopse, obj.titulo, obj.trailer]})

    $(".modal-header").html("")
    for (var i = 0; i < 1; i++) {
        var conteudo = ""

        conteudo += '<h5 class="modal-title" id="exampleModalLabel">' + array[id][7] + '</h5>'
        conteudo += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
        conteudo +=     '<span aria-hidden="true">&times;</span></button>'
        conteudo += '</button>'
    
        $(".modal-header").append(conteudo)
    }

    $(".modal-body").html("")
    for (var i = 0; i < 1; i++) {
        var conteudo = ""

        conteudo +=     '<div class="conteudo-modal">'
        conteudo +=         '<p> Duração: ' + array[id][1] + '<p>'
        conteudo +=         '<p> Relevância : ' + array[id][5] + '</p>'
        conteudo +=         '<p> Sinopse: ' + array[id][6] + '</p>'
        conteudo +=         '<br>'
        conteudo +=         '<div class="embed-responsive embed-responsive-16by9">'
        conteudo +=             '<iframe class="embed-responsive-item" allowfullscreen="" src="' + array[id][8] + '"></iframe>'
        conteudo +=         '</div>'
        conteudo +=     '</div>'

        $(".modal-body").append(conteudo)
    }

}

function ReceberSeriesFavoritas() {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../Public/php/recebe_series_favoritos.php",
        success: function(retorno) {
            mostrarSeries(JSON.stringify(retorno));
        }
    })
}

function mostrarSeries(param) {
    var auxiliar = JSON.parse(param);

    var array = auxiliar.map(function (obj) {  return [obj.ano, obj.temporada, obj.genero, obj.id, obj.imagem, obj.relevancia, obj.sinopse, obj.titulo, obj.trailer]});

    $(".produtosSeries").html("")
    for (var i = 0; i < array.length; i++) {
        var conteudo = ""
        
        conteudo += '<div class="card" style="width: 18rem;">'
        conteudo +=     '<img src="../Public/img/' + array[i][4] + '" class="card-img-top" alt="...">'
        conteudo +=     '<div class="card-body">'
        conteudo +=         '<h5 class="card-title">' + array[i][7] + '</h5>'
        conteudo +=         '<p class="card-text"> Gênero: ' + array[i][2] + '</p>'
        conteudo +=         '<p class="card-text"> Ano: ' + array[i][0] + '</p>'
        conteudo +=         '<br>'
        conteudo +=         '<button type="button" class="btn btn-primary" id="btnMaisInfos" data-toggle="modal" id_serie="' + i + '" data-target="#exampleModalCenter">Mais Informações</button>'
        conteudo +=         '<br>'
        conteudo +=         '<button type="button" class="btn  btn-danger" id="btnRemove" id_serie="' + array[i][3] + '" data-target="#exampleModalCenter">Remover</button>'
        conteudo +=     '</div>'
        conteudo += '</div>'

         $(".produtosSeries").append(conteudo)
    }
    $("#btnRemove").click(function() {
        var id = $(this).attr("id_serie")
        id = parseInt(id);
        RemoveFavoritosSeries(id)
    })

    $(".btn-primary").click(function() {
        var id = $(this).attr("id_serie")
        idFilme = id;
        mostrarModalSerie(param, id)
    })

}

function mostrarModalSerie(param, id) {
    console.log(id)
    var auxiliar = JSON.parse(param);

    var array = auxiliar.map(function (obj) {  return [obj.ano, obj.temporada, obj.genero, obj.id, obj.imagem, obj.relevancia, obj.sinopse, obj.titulo, obj.trailer]})

    $(".modal-header").html("")
    for (var i = 0; i < 1; i++) {
        var conteudo = ""

        conteudo += '<h5 class="modal-title" id="exampleModalLabel">' + array[id][7] + '</h5>'
        conteudo += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
        conteudo +=     '<span aria-hidden="true">&times;</span></button>'
        conteudo += '</button>'
    
        $(".modal-header").append(conteudo)
    }

    $(".modal-body").html("")
    for (var i = 0; i < 1; i++) {
        var conteudo = ""

        conteudo +=     '<div class="conteudo-modal">'
        conteudo +=         '<p> Temporada: ' + array[id][1] + '<p>'
        conteudo +=         '<p> Relevância : ' + array[id][5] + '</p>'
        conteudo +=         '<p> Sinopse: ' + array[id][6] + '</p>'
        conteudo +=         '<br>'
        conteudo +=         '<div class="embed-responsive embed-responsive-16by9">'
        conteudo +=             '<iframe class="embed-responsive-item" allowfullscreen="" src="' + array[id][8] + '"></iframe>'
        conteudo +=         '</div>'
        conteudo +=     '</div>'

        $(".modal-body").append(conteudo)
    }

}