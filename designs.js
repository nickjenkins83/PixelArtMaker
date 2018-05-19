// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var height, width, color;

document.addEventListener("DOMContentLoaded", function(event) {

})

$("#sizePicker").on ("submit", function(event) {
 	event.preventDefault();
 	makeGrid();
 });

//Create Grid

const canvas = $("#pixelCanvas");

	function makeGrid() {
		const gridHeight=$("#inputHeight").val();
		const gridWidth=$("#inputWeight").val();

//reset table at each submit
	$('#pixelCanvas').html(" ");


		for (let h=1; h<=gridHeight; h++) {
			canvas.append ("<tr></tr>");
		}

		for (let w=1; w<=gridWidth; w++) {
			$("tr").append ("<td></td>");
		}

	}


 	//create color

 	canvas.click ("td", function (event) {
 		const pickcolor = $("#colorPicker").val();
 		$(event.target).css ("background-color", pickcolor);
 	})
 	canvas.click(function(e) {
 		$(e.target).css("background-color", " ");



 });
