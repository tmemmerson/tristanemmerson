$(window).on("load", function() {
	$(".loader .inner").fadeOut(500, function() {
		$(".loader").fadeOut(750);
	});

})

$(document).ready(function() {
	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: true
	});
	
	var typed = new Typed(".typed", {
		strings: ["Software Engineer", "Web Developer", "Dad", "Graphic Designer", "Entrepreneur", "Artist"],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false,
	});

	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
				0:{
						items:1
				},
				480:{
						items:2
				},
				768:{
						items:3
				},
				938:{
					items:4
			}
		}
});

var skillsTopOffset = $(".skillSection").offset().top;
var statTopOffset = $(".statsSection").offset().top;
var countUpFinished = false;
$(window).scroll(function(){

	if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
		$('.chart').easyPieChart({
			easing: 'easeInOut',
			barColor: 'white',
			trackColor: 'grey',
			scaleColor: false,
			lineWidth: 4,
			size: 152,
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}	
		});
	}
	if(!countUpFinished && window.pageYOffset > statTopOffset - $(window).height() + 200) {
		$(".counter").each(function() {
			var element = $(this);
			var endVal = parseInt(element.text());
			element.countup(endVal);
		})
		countUpFinished = true;
	}
});

$("[data-fancybox]").fancybox();


$(".items").isotope({
	filter: '*',
	animationOptions: {
		duration: 1500,
		easing: 'linear',
		queue: false
	}
});
	$("filters a").click(function(){
		$("#filters .current").removeClass("current");
		$(this).addClass("current");
	})
});