// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
// variable initialization

var color;
var height, width;
(document).ready(function(){

$('#sizePicker').submit(function makeGrid(grid){
	
	height=$('#inputHeight').val();
	width=$('#inputWidth').val();
	makeGrid(height,width);	
	
	for(var i=1; i<=height; i++){
				
		for(var j=1; j<=width; j++){
			$('tr:last').append('<td></td');
			$('td').atrr("class",'cells');
		}
	}
	
	grid.preventDefault();
	
	$('.cells').click(function(event){
		var gridMaker=$('#colorPicker').val()
			$(event.target).css('background-clor', gridMaker)
		});
	});
});