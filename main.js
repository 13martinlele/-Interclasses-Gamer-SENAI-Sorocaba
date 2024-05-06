function redirecionar() {
    // Redireciona para o arquivo "outra_pagina.html"
    window.location.href = "infos.html";
}

function voltar() {
    // Voltar para a página anterior no histórico do navegador
     window.history.back();
}

$(".drop")
  .mouseover(function() {
  $(".dropdown").show(300);
});
$(".drop")
  .mouseleave(function() {
  $(".dropdown").hide(300);     
});
