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
				600:{
						items:3
				},
				1000:{
						items:5
				}
		}
});

$('.chart').easyPieChart({

});



})