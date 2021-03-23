$(document).ready(function(){
    
    ColocarMascara();

});


function ColocarMascara() {
    $("#cpf").inputmask("999.999.999-99");
    $("#email").inputmask("email");
    $("#data").inputmask("99/99/9999");
    $("#numCartao").inputmask("9999 9999 9999 9999");
}