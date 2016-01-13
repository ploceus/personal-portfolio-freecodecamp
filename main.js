$(document).ready(function() {
  toggleMenu();
});

function toggleMenu() {
  // Codigo menu emergente
  // Mostrar y ocultar menu en mobil.
  // Clickar icono menú
  var contador = 1;
  $('.icono-menu').click(function() {
    console.log('click en icono-menu');
    if (contador === 1) {
      $('.menu-superior').animate({
        height: '175px',
        border: '5px solid #ccc'
      });
      contador = 0;
    } else {
      contador = 1;
      $('.menu-superior').animate({
        height: '0'
      });
    }
  });
  //Ocultar menú despues de hacer selección.
  $('.menu-superior li').click(function() {
    $('.menu-superior').animate({
      height: '0'
    });
    contador = 1;
  });
}

