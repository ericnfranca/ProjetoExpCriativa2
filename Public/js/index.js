$(document).ready(function() {
    fLocalComunicaServidor();
    //EnviarFilmesServidor();
    RecebeFilmesServidor();
});


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

function EnviarFilmesServidor() {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../Public/php/envia_filmes.php",
        data: {
            // titulo: "Velozes e Furiosos",
            // genero: "Aventura",
            // ano: "1995",
            // duracao: "02:30:10",
            // relevancia: "top",
            // sinopse: "lorem ipsum",
            // trailer: "lorem ipsum",
            // imagem: "velozesEFuriosos.jpg",
        },
        success: function(retorno) {

        }
    })
}

function RecebeFilmesServidorModal() {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../Public/php/recebe_filmes.php",
        data: {
            titulo: "Velozes e Furiosos",
        },
        success: function(retorno) {
           //mostrarModal(JSON.stringify(retorno));
        }
    })
}

function RecebeFilmesServidor() {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../Public/php/recebe_filmes.php",
        data: {
            titulo: "Velozes e Furiosos",
        },
        success: function(retorno) {
            mostrarFilmes(JSON.stringify(retorno));
        }
    })
}


function mostrarFilmes(param) {
    var auxiliar = JSON.parse(param);

    var array = auxiliar.map(function (obj) {  return [obj.ano, obj.duracao, obj.genero, obj.id, obj.imagem, obj.relevancia, obj.sinopse, obj.titulo, obj.trailer]})

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
        conteudo +=     '</div>'
        conteudo += '</div>'

         $(".produtos").append(conteudo)
    }

    $(".btn-primary").click(function() {
        var id = $(this).attr("id_filme")
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
        conteudo +=         '<button type="button" class="btn btn-primary">Assistir Filme</button>'
        conteudo +=     '</div>'

        $(".modal-body").append(conteudo)
    }
}
