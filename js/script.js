$(document).ready(
  function(){
    // Attivazione dropdown all'entrata del mouse
    $('.with_dropdown').mouseenter(
      function(){
        $(this).children('.dropdown').removeClass('hidden');
      }
    )
    // Disattivazione dropdown all'uscita del mouse
    $('.with_dropdown').mouseleave(
      function(){
        $(this).children('.dropdown').addClass('hidden');
      }
    )
    // Disattivazione dropdown al click
    $('.with_dropdown').click(
      function(){
        $(this).children('.dropdown').addClass('hidden');
      }
    )
  }
)
