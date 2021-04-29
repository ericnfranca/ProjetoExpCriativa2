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
        conteudo +=         '<p class="card-text">' + array[i][2] + '</p>'
        conteudo +=         '<b class="card-text">' + array[i][0] + '</b>'
        conteudo +=     '</div>'
        conteudo += '</div>'

        
        $(".produtos").append(conteudo)
    }
}



