/*
 *  
 */
$(function() {
	var character = {
		name : "unnamed",
		updateRace : function(newRace) {
			if (this.cRace || this.cRace != newRace) {
				this.cRace = newRace;
				// TODO: Check eligibility on current archetype, feats & traits.
				// TODO: Remove current and apply new  Racial Traits
			}
		},
		updateClass : function(newClass) {
			if (this.cClass || this.cClass != newClass) {
				this.cClass = newClass;
				this.removeArchetype(); // delete archetype as it is no longer
										// available to the new class.
				// TODO: Check eligibility on current traits & feats.
				// TODO: Remove Old Class Features & Apply the new ones

			}
		},
		updateArchetype : function(newArchetype) {
			if (newArchetype) {
				if (this.cArchetype || this.cArchetype != newArchetype) {
					this.cArchetype = newArchetype;
				}
			} else {
				delete this.cArchetype;
			}
		},
		removeArchetype: function() {delete this.archetype;}
	};

	$(".archetype").hide(); // Initially Hide the Archetype drop-down until a
							// Class with Archetypes is selected.

	// TODO: Populate Race Drop-down
	// TODO: Populate Class drop-down

	// Set Race upon selection
	$("#race").change(function() {
		character.race = $("#race").val();
		// TODO: If Class is selected re-populate Archetype drop-down (to
		// add/remove race specific Archetypes).
	});

	// Set Class upon selection and update Archetype drop-down
	$("#class").change(function() {
		character.cClass = $("#class").val();
		// TODO: Hide & Clear Archetype drop-down and re-populate it. Show it,
		// if there are more than one.
	});

	$("#archetype").change(function() {
		character.archetype = $("#archetype").val();
	});
});

// var TypeOrder = ["Class", "Prestige Class", "NPC Class", "Archetypes"];
// var BookOrder = ["Core Rulebook", "Advanced Player's Guide", "Ultimate
// Magic", "Ultimate Combat", "Advanced Race Guide", "Advanced Class Guide"];
//
// var categories = [];
// var charClass = [];
// $.getJSON("classes.json", function(data){
// // Read in Class data and create a list of Categories based on Type of
// // Class and Name of Source Book
// $.each(data, function(k, v){
// charClass.push({
// "name": k,
// "type": v.type,
// "source": v.source
// });
// });
// });
//	
// charClass.sort(function(a,b){
// var classA = $.inArray(a.type, ClassOrder);
// var classB = $.inArray(b.type, ClassOrder);
// if(classA == classB) {
// var bookA = $.inArray(a.name, BookOrder);
// var bookB = $.inArray(b.name, BookOrder);
// return bookA - bookB;
// } else {
// return classA - classB;
// }
// });
//		
// for(var i = 0; i < data.Classes.length; i++) {
// addType(data.Classes[i].type, data.Classes[i].source);
// charClass.push(data.Classes[i]);
// }
//		
// // Create OptGroup for each category.
// categories.sort(function(a, b){
// var classA = $.inArray(a.type, ClassOrder);
// var classB = $.inArray(b.type, ClassOrder);
// if(classA == classB) {
// var bookA = $.inArray(a.name, BookOrder);
// var bookB = $.inArray(b.name, BookOrder);
// return bookA - bookB;
// } else
// return classA - classB;
// });
//
//		
// for(var i = 0; i < categories.length; i++){
// $("<optgroup />", {
// "label": categories[i].id,
// "id": categories[i].name
// }).appendTo($("#class"));
// }
//		
// // Fill optgroups with Classes
// charClass=charClass.objSort("name");
// for(var i = 0; i < charClass.length; i++){
// var $optGroup = $("#" + createCatName(charClass[i].type,
// charClass[i].source.name));
// $("<option />", {"value":
// charClass[i].name}).text(charClass[i].name).appendTo($optGroup);
// }
// });
//	
// $.getJSON("races.json", function(data) {
// var sources = [];
// var racesList = [];
// for(var i in data) {
// if($.inArray(data[i].source.name, sources) == -1)
// sources.push(data[i].source.name);
// data[i].name = i;
// racesList.push(data[i]);
// }
// racesList = racesList.objSort("name");
//		
// sources.sort(function(a, b){
// a = $.inArray(a, BookOrder);
// b = $.inArray(b, BookOrder);
// return a-b; // (a < b) ? -1 : (a > b) ? 1 : 0;
// });
// $.each(sources, function(i, v){
// if(typeof v === 'string') $("<optgroup />", {"label": v, "id": "r" +
// v.replace(/[\s']*/g, '')}).text(v).appendTo($("#race"));
// });
// for(var i = 0; i <racesList.length; i++) {
// $("<option />", {"value":
// racesList[i].name}).text(racesList[i].name).appendTo($("#r" +
// racesList[i].source.name.replace(/[\s']*/g, '')));
// }
// });
//	
//	
// function createCatName(type, name){
// return "c" + type.replace(/[\s']*/g, '') + "-" + name.replace(/[\s']*/g, '');
// }
//	
// function addType(type, source) {
// var cName = createCatName(type, source.name);
// for(var i=0; i < categories.length; i++) {
// if(categories[i].name == cName) return;
// }
// var cID;
// if (type != "Class") cID = type; else cID = source.name;
// categories.push({"name": cName, "type": type, "id": cID});
// }
//	
// function meetsRequirements(requirements) {
// var requirementsMet = true;
// for(var i=0; i< requirements.length; i++){
// $.each(requirements[i], function(type, requirement){
// switch(type){
// case "race":
// if ($("#race").val() != requirement) requirementsMet = false;
// break;
// default:
// }
// });
// }
// return requirementsMet;
// }
//
// function getClass(className) {
// for(var i = 0; i < charClass.length; i++) {
// if(charClass[i].name == className)
// return charClass[i];
// }
// return null;
// }
//	
// // $("#race").change(function(){
// // if (typeof $("#class").val() === 'String') {
// // $("#class").trigger("change");
// // }
// // });
//	
// $("#race").change(function(){
// var newRace = $("#race").val();
// if (character.race != newRace) character.race == newRace;
// });
//
//	
// $("#class").change(function(){
// var newClass = $("#class").val()
// if (character.cClass != newclass) {
// character.cClass = $("#class").val();
// delete character.archetype;
//			
// var sources = [];
// var selectedClassArchetypes = [];
// $.each(charClass, function(key,cClass) {
// if(character.name == cClass.name) {
//				
// $("<p />").text(cClass.description).appendTo($("#classDesc").empty());
// selectedClassArchetypes = $.each(cClass.archetypes, function(k, archetype){
// if (meetsRequirements(archetype)){
// if ($.inArray(archetype.source.name, sources) == -1 ) {
// sources.push(archetype.source.name);
// }
// return archetype;
// }
// });
// }
// });
//		
// selectedClassArchetypes = selectedClassArchetypes.objSort("name");
//			
// sources.sort(function(a, b){
// a = $.inArray(a, BookOrder);
// b = $.inArray(b, BookOrder);
// return a-b; // (a < b) ? -1 : (a > b) ? 1 : 0;
// });
//				
// if (selectedClassArchetypes.length) {
// $("#archetype").empty();
// $("<option />", {"value": "None"}).text("No
// Archetype").appendTo($("#archetype"));
//			
// $.each(sources, function(i, v){
// if(typeof v === 'string') $("<optgroup />", {"label": v, "id": "a" +
// v.replace(/[\s']*/g, '')}).text(v).appendTo($("#archetype"));
// })
//						
// for(var i = 0; i < selectedClassArchetypes.length; i++){
// var aType = selectedClassArchetypes[i];
// var nameText = aType.name;
// var showArc = true;
// if(aType.requirements){// && typeof aType.requirements === Array) {
// for(var j = 0; j < aType.requirements.length ;j++) {
// $.each(aType.requirements[j], function (k, v) {
// if(k == "race") {// && v == $("#race").val()) {
// nameText += " (" + v + " only)";
// if (v != $("#race").val() && $("#race").val() !="Select Race" )
// {showArc=false;}
// }
// });
// }
// }
// if (showArc){
// $("<option />", {"value": aType.name}).text(nameText)
// .appendTo($("#a" + aType.source.name.replace(/[\s']*/g, '')));
// }
// }
// $(".archetype").show();
// } else {
// $(".archetype").hide();
// }
// }
// });
// });
