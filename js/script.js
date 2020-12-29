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
})