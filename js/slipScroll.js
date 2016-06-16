var setLogo = function() {

  $('.moveable').each(function() {
    $(this).css('top',
      $('.default').offset().top -
      $(this).closest('.content').offset().top
    );
  });

};

$(document).scroll(function() {
  setLogo();
});

setLogo();
