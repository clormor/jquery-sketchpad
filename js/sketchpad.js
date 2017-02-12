var gridSquares = 0
var gridSquareSize = 0
var gridSizePx = 0
var gridTargetSizePx = 600
var squaresPerRow = 0
var borderSize = 0

$(document).ready(function() {
	resizeGrid(64, 1)
	drawGrid()
});

var resizeGrid = function(numSquares, border) {
	gridSquares = numSquares
	borderSize = border
	squaresPerRow = Math.sqrt(gridSquares)
	gridSquareSize = Math.floor(gridTargetSizePx / squaresPerRow) - borderSize
	gridSizePx = (gridSquareSize * squaresPerRow) + borderSize + (squaresPerRow * borderSize)
	$('#grid').height(gridSizePx)
	$('#grid').width(gridSizePx)
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
