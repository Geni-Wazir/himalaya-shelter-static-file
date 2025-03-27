$('.expand-button').on('click', function(){
  $('.special-text').toggleClass('-expanded');
  
  if ($('.special-text').hasClass('-expanded')) {
    $('.expand-button').html('View Less');
  } else {
    $('.expand-button').html('View More');
  }
});