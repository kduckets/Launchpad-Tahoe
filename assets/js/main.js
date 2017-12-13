$(function() {
	var launchpad = $("#launchpad"),
		open = function() {
			launchpad.addClass("shown start");
			launchpad.find("nav").addClass("scale-down");
		},
		close = function() {
			launchpad
				.removeClass("start")
				.addClass("end");
			launchpad.find("nav")
				.removeClass("scale-down")
				.addClass("scale-up");
			setTimeout(function() {
				launchpad.removeClass("shown end");
				launchpad.find("nav").removeClass("scale-up");
			}, 350);
		};

	// Open the launchpad
	$(".open-menu").on("click", open);


});
