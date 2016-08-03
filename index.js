        
$(document).ready(function(){

	$("#button").click(function(){
		var x = document.getElementById("myform").elements.namedItem("entry").value;
		var link = "http://www.omdbapi.com/?t=" + x ;

			$.getJSON(link,function(json){
				
				var poster = json.Poster;
					$.each(json, function(key, value){
	});

$("#details").append("<img src=" + poster + " width=85% height=85%>");

$("#blah3").append("<br><b>Title: </b>:  "+ json.Title +"<p><b>Year:  </b>"+ json.Year + "</p>");
$("#blah3").append("<p><b>Genre: </b>  "+ json.Genre + "</p>");

$("#blah3").append("<p><b>Plot: </b>  "+ json.Plot + "</p>");
$("#blah3").append("<p><b>Runtime: </b>  "+ json.Runtime + "</p>");

$("#blah3").append("<p><b>imdb ratings: </b>:  "+ json.imdbRating + "</p>");
$("#main").append("<hr>");

});

	});
});