'use-strict';
$("body").removeClass("over");
$(window).on('load', function() {
	$('.preloader').fadeOut(2000);
});

$(document).ready(function() {
	$('.toggle').click(function() {
		$(this).toggleClass("active");
		$('.nav-primary ').toggleClass("active-nav");
		$('body').toggleClass("over");
		$(".cols").removeClass("cols-left");
	});

	$('.column ').click(function() {
		$(this).siblings().children('.cols').removeClass("cols-left");
		$(this).children('.cols').toggleClass("cols-left");
	});

	$(".cols li").click(function(){
		$(".nav-primary").removeClass("active-nav");
		$(".toggle").removeClass("active");
		$("body").removeClass("over");
	});

	


	$(".last-column").click(function(){
		$(".search").addClass("active-s");
		$("body").removeClass("over");
	});

	$(".search-close").click(function(){
		$(".search").removeClass("active-s");
	});

	$('.accordion-cell').click(function() {
		$(this).siblings().removeClass('expanded');
		$(this).toggleClass('expanded');
	});

	$('.click-card').click(function() {
		$(this).siblings().removeClass('h-c');
		$(this).toggleClass('h-c');
	});

	$(window).on('scroll', function() {
		if ($(window).scrollTop() > $('.section').offset().top - 250) {
			$('.card-list li').css({ transform: 'scale(1)' });
		} else {
			$('.card-list li').css({ transform: 'scale(0)' });
		}
		if ($(window).scrollTop() > $('.section-1').offset().top - 250) {
			$('.click-card').css({ transform: 'rotate(0)' });
		} else {
			$('.click-card').css({ transform: 'rotate(45deg)' });
		}
		if ($(window).scrollTop() > $('.section-2').offset().top - 250) {
			$('.section-2').css({ left: '0' });
		} else {
			$('.section-2').css({ left: '-100%' });
		}
		if ($(window).scrollTop() > $('.section-3').offset().top - 250) {
			$('.section-3').css({ "transform": "rotateX(0deg)"});
		} else {
			$('.section-3').css({"transform": "rotateX(60deg)"});
		}
		if ($(window).scrollTop() > $('.section-4').offset().top - 250) {
			$('.list-child-1 ').css({ "transform": "scale(1)"});
		} else {
			$('.list-child-1 ').css({"transform": "scale(0)"});
		}
		if ($(window).scrollTop() >  150 ) {
			$(".quicklinks").css({"bottom":"32px"})
		}else{
			$(".quicklinks").css({"bottom":"-100%"})
		}
		var scrollH = document.scrollHeight || document.documentElement.scrollHeight;
        if($(window).scrollTop() + $(window).height() == scrollH){
            $(".quicklinks").css({"bottom":"-100%"})
        }
		if ($(window).scrollTop() > 150) {
			$('.button-to-top').css({ transform: 'scale(1)' });
		} else {
			$('.button-to-top').css({ transform: 'scale(0)' });
		}
	});

	$('.button-to-top').on('click', function() {
		$('html').animate({ scrollTop: 0 }, 1000);
	});
});
