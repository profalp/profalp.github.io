$(document).ready(function () {
	var nav = $('#header .header');
	var navPosition = nav.offset().top;

	$(window).scroll(function () {
		if ($(window).scrollTop() > navPosition){
			nav.addClass('sticky');
		} else {
			nav.removeClass('sticky');
		}
	});

	$('a.scroll-to').click(function () {
		$('html:not(:animated),body:not(:animated)').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 800);

		return false;
	});
});
