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
        $(this).children('.dropdown').toggleClass('hidden');
      }
    )
    // Frecce vicino alla lingua
    // All'entrata del mouse
    $('.language').mouseenter(
      function(){
        var arrowUp = $(this).children('.arrow_up');
        var arrowDown = $(this).children('.arrow_down');

        arrowDown.removeClass('active').addClass('hidden');
        arrowUp.removeClass('hidden').addClass('active');


      }
    )

    // All'uscita del mouse
    $('.language').mouseleave(
      function(){
        var arrowUp = $(this).children('.arrow_up');
        var arrowDown = $(this).children('.arrow_down');

        arrowDown.removeClass('hidden').addClass('active');
        arrowUp.removeClass('active').addClass('hidden');


      }
    )

    //
    // $('.language').mouseleave(
    //   function(){
    //     $(this).children('.arrow_down').removeClass('hidden');
    //     $(this).children('.arrow_down').addClass('active');
    //
    //   }
    // )
  }
)
