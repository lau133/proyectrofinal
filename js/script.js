$(document).ready(function () {
  $('#filtro-categoria').on('change', function () {
    var categoriaSeleccionada = $(this).val();

    $('.producto').each(function () {
      var categoriaProducto = $(this).attr('categoria');

      if (categoriaSeleccionada === 'Todos' || categoriaProducto === categoriaSeleccionada) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});
