/**
 * 
 */
(function () {
    var app = angular.module("characterSheet", []);
    
    app.filter('signedNumber', function () {
        return function (input) {
            return (input < 0 ? "\u2212" : "\u002B") + Math.abs(input);
        };
    });
    
    app.directive("abilityScores", function() {
    	return {
    		restrict: 'E',
    		templateUrl: "templates/character-ability-score.html"
    	};
    });
    
    app.directive("skillList", function() {
    	return {
    		restrict: 'E',
    		templateUrl: "templates/character-skill-list.html"
    	};
    });
    
    app.controller('CharacterController', function() {
    	var abilityDefaults = [{name: "Strength", score: 0},
    	                       {name: "Dexterity", score: 0}, 
    	                       {name: "Constitution", score: 0}, 
    	                       {name: "Intelligence", score: 0}, 
    	                       {name: "Wisdom", score: 0}, 
    	                       {name: "Charisma", score: 0}];
        this.abilities = [];
        for (ability in abilityDefaults) {
        	this.abilities.push(new Ability(abilityDefaults[ability]));
        }
        
        var skillDefaults = [{name: "Acrobatics", trained: true, ability: "Dexterity", armorCheckPenalty: true}];
        this.skills = [];
        for (skill in skillDefaults) {
        	this.skills.push(new Skill(skillDefaults[skill]));
        }
    });
        
    var Skill = function(skillsArray) {
    	this.name = skillsArray.name;
    	this.ranks = 0;
    	this.isTrained = skillsArray.trained || false;
    	this.isClassSkill = false;
    	this.armorCheckPenalty = skillsArray.armorCheckPenalty || false;
    	this.ability = skillsArray.ability;
    	this.abilityLabel = function() {
    		return toUppercase(this.ability).substring(0,3);
    	};
    	this.abilityMod = function () {
    		for (ability in character.abilities) {
    			if (ability.name == this.abilityMod) return ability.modifier;
    		}
    		return 0;
    	};
    	
    	this.modifier = function() {
    		return (this.isClassSkill ? 3 : 0) + this.ranks + this.abilityMod();
    	};
    }
    
	var Ability = function(AbilityArray) {
		this.name = AbilityArray.name;
        this.baseScore = AbilityArray.score || 10;
        this.ageModifier = 0;
        this.racialModifier = 0;
        this.itemModifier = 0;
        this.temporaryModifier = 0;
        this.adjusted = function () {
            return this.baseScore + this.ageModifier + this.racialModifier + this.itemModifier + this.temporaryModifier;
        };
        this.modifier = function () {
            return Math.floor(this.adjusted() / 2) - 5;
        };        
        this.pointBuyCost = function () {
            return [-4, -2, -1, 0, 1, 2, 3, 5, 7, 10, 13, 17][this.baseScore - 7];
        };
	}

})();