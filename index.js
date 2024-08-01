$(function() {

  colocarcor();
  
  function colocarcor() {


    $('input').click(function(e) {
      $(this).css({
        'border-color': 'white',
      });
      e.stopPropagation();
    });

  }

  apagar();


  function apagar() {

    $('body').click(function() {
      $('input').css({
        'border-color': '#555555',
      });

    });
  }

  abrirTelaCadastro();


  function abrirTelaCadastro() {

    $('.cadastrar').click(function() {

      $('.login').fadeOut(1000,function(){
        $('.cadastro').fadeIn(2000);
        $('.second_container').css('display', 'flex');
      });

    });
  }

});
