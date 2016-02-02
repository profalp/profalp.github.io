$(document).ready(function () {
	var nav = $('#menu');
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

	var menu = $('#menu');

	$(document).click(function(e) {
		if ($(e.target).closest(menu).length == 0) {
			menu.removeClass('opened');
		}
	});

	$('#open-menu').click(function () {
		menu.toggleClass('opened');
	});
});
