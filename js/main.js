// $(window).load(function() {
// 	setInterval(function() {
// 		$("#intro").css({
// 			"color": "#fff"
// 		});
// 		$(".overlay").css({
// 			"opacity": 0.5
// 		});
// 	},1000);
// });

// $(document).ready(function() {
	
// 	setTimeout(function(){
// 		$('body').addClass('loaded');
// 		$('h1').css('color','#222222');
// 	}, 3000);
	
// });

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});