jQuery(document).ready(function($) {

	$('a[rel=external]').on('click touchstart', function (e) {
		e.preventDefault();
		window.open(this.href);
	});


	$('header nav > a').on('click touchstart',function (e) {
		e.preventDefault();
		if ($('header nav').hasClass('menu-active')) {
			$('header nav').removeClass('menu-active');
		}
		else {
			$('header nav').addClass('menu-active');
		}
	});
	$(window).resize(function() {
		if ($('body').width() >= 1100) {
			$('header nav').removeClass('menu-active');
		}
	});


	$('header nav li a').on('click touchstart',function () {
		var el = $(this).attr('href');
		if (el.search('#') == 0) {
			var strpos = el.search('#');
			var anchor = el.substring(strpos+1);
			$('nav').removeClass('menu-active');
			$('html,body').animate({
				scrollTop: $('*[id=' + anchor + ']').offset().top-100
			},1000);
		}
		return false;
	});
});