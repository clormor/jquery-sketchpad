var imgCounter = 0
var fadeTime = 500
var loopTime = 5000
var loop, numImages

$(document).ready(function() {
	// Start the slideshow
	countImages()
	showNextImage()
	startSlide()

	// Stop the slideshow when user hovers over the current image
	$('#slider > img').hover(function() {stopSlide()}, function() {startSlide()})

	// Show previous slide when user clicks Prev
	$('#prev').click(function() {
		stopSlide()
		showPrevImage()
		startSlide()
	})

	// Show next slide when user clicks Next
	$('#next').click(function() {
		stopSlide()
		showNextImage()
		startSlide()
	})
});

// Count the images in the slider (so we can add images w/o having to update JavaScript)
var countImages = function() {
	numImages = $('#slider > img').length
}

// show the next image (called by the timer, and when user clicks Next)
var showNextImage = function() {
	$('#slider > #' + Math.abs(imgCounter % numImages)).fadeOut(fadeTime)
	$('#slider > #' + Math.abs(++imgCounter % numImages)).fadeIn(fadeTime * 2)
}

// show previous image (called when user clicks Prev)
var showPrevImage = function() {
	$('#slider > #' + Math.abs(imgCounter % numImages)).fadeOut(fadeTime)
	$('#slider > #' + Math.abs(--imgCounter % numImages)).fadeIn(fadeTime * 2)
}

// (re)start the timer
var startSlide = function() {
	loop = setInterval(showNextImage, loopTime)
}

// Stop the timer when user clicks to prevent jerkiness
var stopSlide = function() {
	clearInterval(loop)
}