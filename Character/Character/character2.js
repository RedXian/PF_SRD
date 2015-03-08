/**
 * 
 */
$(function() {
	
	$.getJSON("character.JSON", function(data){
		populateSelect(data, "Races", "#race");
		populateSelect(data, "Classes", "#class");
	});
	
	function populateSelect(dataSource, subset, destination) {
		$.each(dataSource[subset], function (key, value) {
			var group = $("<optgroup/>").attr(
				"label", key
				);
			console.log(group);
			$.each(value, function (key, value){
				$("<option/>", {
				    "value" : value.name,
				    html : value.name
				}).appendTo(group);
			});
			group.appendTo(destination);
		});	
	}
});