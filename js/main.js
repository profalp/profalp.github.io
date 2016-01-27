$(document).ready(function(){
	var nav = $('#header .header');
	var navPosition = nav.offset().top;

	$(window).scroll(function(){
		if ($(window).scrollTop() > navPosition){
			nav.addClass('sticky');
		} else {
			nav.removeClass('sticky');
		}
	});

	jQuery("a.scrollTo").click(function () {
		elementClick = jQuery(this).attr("href");
		destination = jQuery(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
		return false;
	});
});
