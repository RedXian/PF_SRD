/**
 * TODO: Re-factor JSON Files to have Name as Unique Identifier.
 * TODO: Move JSON reading code to it's own file. 
 */
$(function() {
	var character = {"name": "unnamed"};
		
	$(".archetype").hide();
	
	var ClassOrder = ["Class", "Prestige Class", "NPC Class"];
	var BookOrder = ["Core Rulebook", "Advanced Player's Guide", "Ultimate Magic", "Ultimate Combat", "Advanced Race Guide", "Advanced Class Guide"];
	
	var categories = [];
	var charClass = [];
	$.getJSON("classes.json", function(data){
		// Read in Class data and create a list of Categories based on Type of Class and Name of Source Book
		for(var i = 0; i < data.Classes.length; i++) {
			addType(data.Classes[i].type, data.Classes[i].source);
			charClass.push(data.Classes[i]);
		}
		
		// Create OptGroup for each category.
		categories.sort(function(a, b){
			var classA = $.inArray(a.type, ClassOrder);
			var classB = $.inArray(b.type, ClassOrder);
			if(classA == classB) {
				var bookA = $.inArray(a.name, BookOrder);
				var bookB = $.inArray(b.name, BookOrder);
				return bookA - bookB;
			} else
				return classA - classB;
		});

		
		for(var i = 0; i < categories.length; i++){
			$("<optgroup />", {
				"label": categories[i].id,
				"id": categories[i].name
			}).appendTo($("#class"));
		}		
		
		// Fill optgroups with Classes
		charClass=charClass.objSort("name");
		for(var i = 0; i < charClass.length; i++){
			var $optGroup = $("#" + createCatName(charClass[i].type, charClass[i].source.name));
			$("<option />", {"value": charClass[i].name}).text(charClass[i].name).appendTo($optGroup);
		}
	});
	
	$.getJSON("races.json", function(data) {
		var sources = [];
		var racesList = [];
		for(var i in data) {
			if($.inArray(data[i].source.name, sources) == -1) sources.push(data[i].source.name);
			data[i].name = i;
			racesList.push(data[i]);
		}
		racesList = racesList.objSort("name");		
		
		sources.sort(function(a, b){
			a = $.inArray(a, BookOrder);
			b = $.inArray(b, BookOrder);
			return a-b; //(a < b) ? -1 : (a > b) ? 1 : 0;
		});
		$.each(sources, function(i, v){
			if(typeof v === 'string') $("<optgroup />", {"label": v, "id": "r" + v.replace(/[\s']*/g, '')}).text(v).appendTo($("#race"));
		});
		for(var i = 0; i <racesList.length; i++) {
			$("<option />", {"value": racesList[i].name}).text(racesList[i].name).appendTo($("#r" + racesList[i].source.name.replace(/[\s']*/g, '')));
		}
	});
	
	
	function createCatName(type, name){
		return "c" + type.replace(/[\s']*/g, '') + "-" + name.replace(/[\s']*/g, '');
	}
	
	function addType(type, source) {
		var cName = createCatName(type, source.name);
		for(var i=0; i < categories.length; i++) {
			if(categories[i].name == cName) return;
		}	
		var cID;
		if (type != "Class") cID = type; else cID = source.name;
		categories.push({"name": cName, "type": type, "id": cID});
	}
	
	function meetsRequirements(requirements) {
		var requirementsMet = true;
		for(var i=0; i< requirements.length; i++){
			$.each(requirements[i], function(type, requirement){
				switch(type){
					case "race":
						if ($("#race").val() != requirement) requirementsMet = false;
						break;
					default:
				}
			});
		}
		return requirementsMet;	
	}

	function getClass(className) {
		for(var i = 0; i < charClass.length; i++) {
			if(charClass[i].name == className) 
				return charClass[i];
		}
		return null;
	}
	
	//$("#race").change(function(){if (typeof $("#class").val() === 'String') $("#class").trigger("change")});
	
	$("#class").change(function(){
		character.name = $("#class").val();
		
		
		var sources = [];
		var selectedClassArchetypes = [];
		$.each(charClass, function(key,cClass) {
			if(character.name == cClass.name) {
				
				$("<p />").text(cClass.description).appendTo($("#classDesc").empty());
				selectedClassArchetypes = $.each(cClass.archetypes, function(k, archetype){
					if (meetsRequirements(archetype)){
						if ($.inArray(archetype.source.name, sources) == -1 ) {
							sources.push(archetype.source.name);
						}
						return archetype;	
					}					
				});
			} 
		});
		
		selectedClassArchetypes = selectedClassArchetypes.objSort("name");
			
		sources.sort(function(a, b){
			a = $.inArray(a, BookOrder);
			b = $.inArray(b, BookOrder);
			return a-b; //(a < b) ? -1 : (a > b) ? 1 : 0;
		});
		
		
		if (selectedClassArchetypes.length) {
			$("#archetype").empty();
			$("<option />", {"value": "None"}).text("No Archetype").appendTo($("#archetype"));
			
			$.each(sources, function(i, v){
				if(typeof v === 'string') $("<optgroup />", {"label": v, "id": "a" + v.replace(/[\s']*/g, '')}).text(v).appendTo($("#archetype"));
			})
						
			for(var i = 0; i < selectedClassArchetypes.length; i++){
				var aType = selectedClassArchetypes[i];
				var nameText = aType.name;
				var showArc = true;
				if(aType.requirements){//} && typeof aType.requirements === Array) {
					for(var j = 0; j < aType.requirements.length ;j++) { 
						$.each(aType.requirements[j], function (k, v) {
							if(k == "race") {//} && v == $("#race").val()) {							
								nameText += " (" + v + " only)";
								if (v != $("#race").val() && $("#race").val() !="Select Race" ) {showArc=false;}
								
							}
							
						});
					}
				}
				if (showArc){
					$("<option />", {"value": aType.name}).text(nameText)
						.appendTo($("#a" + aType.source.name.replace(/[\s']*/g, '')));
				}
			}
			$(".archetype").show();
		} else {
			$(".archetype").hide();
		} 	
	});
});