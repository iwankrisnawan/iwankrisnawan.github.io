$('.english-sub').hide();
$(document).ready(function(){


  $(document).on('click','#button-language',function(){
    var data = $(this).attr('data-language');
    if (data == "english") {
      $(this).attr('data-language','indonesia')
      $('#button-language').html('Indonesia');
      $('.english-sub').show();
      $('.indonesia-sub').hide();
    }
    else{
      $(this).attr('data-language','english');
      $('#button-language').html('English');
      $('.english-sub').hide();
      $('.indonesia-sub').show();
    }
  });

  $(document).on('click','.target-scroll',function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top -50
    }, 1000, 'swing');
  });

});
