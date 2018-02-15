$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	$(".fgImage").css({
		'transform' : 'translate(0px, ' + wScroll/2 + 'px)'
	})

	$(".butterfly1").css({
		'transform' : 'translate(0px, ' + wScroll/1.1 + 'px)'
	})

	$(".butterfly2").css({
		'transform' : 'translate(0px, -' + wScroll + 'px)'
	})

});