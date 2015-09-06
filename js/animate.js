(function ($, window, document, undefined) {

	var animations = [
		"bounce",
		"flash",
		"pulse",
		"rubberBand",
		"shake",
		"swing",
		"tada",
		"wobble",
		"jello"
	];

	// if button of animation was clicked
	$("#da-content").on("click", "a.btn", function(e) {
		e.preventDefault();

		// rand animation
		var no = Math.floor(Math.random() * animations.length);
		var anima = animations[no];

		$("#da-content img").addClass("animated " + anima).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
			$(this).removeClass("animated " + anima);
		});
	});

})(jQuery, window, document);