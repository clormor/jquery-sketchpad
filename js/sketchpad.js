var gridSquares = 4
var gridSquareSize = 0
var gridSizePx = 0
var gridTargetSizePx = 500
var squaresPerRow = 0
var borderSize = 1

$(document).ready(function() {
	drawSlider()
	drawToggle()
	resizeGrid()
});

var resizeGrid = function() {
	$( ".grid-square" ).remove();

	numSquares = $("#slider").slider("value")
	borderSize = ($('.toggle').data('toggle-active')) ? 1 : 0
	
	gridSquares = numSquares * numSquares
	squaresPerRow = Math.sqrt(gridSquares)
	gridSquareSize = Math.floor(gridTargetSizePx / squaresPerRow) - borderSize
	gridSizePx = (gridSquareSize * squaresPerRow) + borderSize + (squaresPerRow * borderSize)
	$('#grid').height(gridSizePx)
	$('#grid').width(gridSizePx)
	drawGrid()
}

var drawSlider = function() {
	$( "#slider" ).slider({
		max: 50,
		min: 2,
		value: 4,
		change: function(event, ui) {
        	resizeGrid()
    	},
	});
}

var drawToggle = function() {
	$('#toggle').toggles({on:true});

	$('.toggle').on('toggle', function(e, active) {
		resizeGrid()
	});
}

var drawGrid = function() {
	for (var i = 0; i < gridSquares; i++) {
		var square = document.createElement('div')
		square.setAttribute("class", "grid-square")
		square.setAttribute("id", "square-" + i)
		$('#grid').append(square)
		setSquareBorder(i)
	}
	$('.grid-square').height(gridSquareSize)
	$('.grid-square').width(gridSquareSize)

	$('.grid-square').mouseover(function() {
		$(this).css({"background-color": "red"})
	})
}

var setSquareBorder = function(squareNum) {
	var rowNum = Math.floor(squareNum / squaresPerRow)
	var colNum = squareNum % squaresPerRow

	if (colNum == 0) {
		$('#square-' + squareNum).css({"border-left": borderSize + "px dashed black"})
	}

	if (rowNum == 0) {
		$('#square-' + squareNum).css({"border-top": borderSize + "px dashed black"})
	}

	$('#square-' + squareNum).css({"border-bottom": borderSize + "px dashed black"})
	$('#square-' + squareNum).css({"border-right": borderSize + "px dashed black"})
	$('#square-' + squareNum).height(gridSquareSize - (2 * borderSize))
	$('#square-' + squareNum).width(gridSquareSize - (2 * borderSize))
}
