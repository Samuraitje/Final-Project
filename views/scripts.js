$(document).ready(function(){
	
//Hamburger toggle	
	$("nav").on("click", function(){
		$("nav").toggleClass("open");
		$("ul").toggleClass("open");
	});
//Tag Handler
	$("#array_tag_handler_1").tagHandler({
		assignedTags: [ 'example 1' ],
		availableTags: [ 'Book', 'Movie', 'Video Game', 'Article', 'News', 'Video', 'Music', 'Anime', 'Food' ],
		autocomplete: true,
		maxTags: 4
	});

});