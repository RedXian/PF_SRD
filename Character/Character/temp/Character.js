Object.prototype.Character = function(level, name){
    var abilities = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];
    var sizeCategories = {"Fine": -8, "Diminutive": -4, "Tiny": -2, "Small": -1, 
                          "Medium": 0, "Large": 1, "Huge": 2, "Gargantuan": 4, "Colossal": 8};
    
    var xpPerLevel = {"Slow": 0,
                      "Medium": 1,
                      "Fast": 2};
                      
	this.characterName = name || "No Name";
    this.characterLevel = level || 1;
    this.experience = xpPerLevel[level + 1];
    this.printCR = function () {
        var cr = this.level/2;
        if (this.characterLevel % 2 != 0) {
            var whole = Math.floor(this.characterLevel/2);
            cr = ((whole > 0) ? whole + ' ' : '' ) + (this.characterLevel % 2) + '/2';  
        }               
		return cr;
	};
    this.gender = "";
	this.alignment = "";
    this.size = "Medium";
    
    this.setName = function(name) { this.characterName = name; };
    this.getName = function() { return this.characterName; };
    
    this.ability = [];
	for (var i = 0, x = abilities.length; i < x; i++){
		var stat = abilities[i];
		this.ability[stat] = new AbilityStat(stat);
	}	
	
	this.setRace = function(race) { 
        this.race = race.name;                            
        this.size = race.size;
    };
	
    this.getArmorClass = function(kind) {
        var ac = 10 + sizeCategories[this.size];
        
        switch(kind){
            case "touch":
            	ac += this.ability.Dexterity.getModifier();              
                break;
            case "flatfoot":
                // ac += Armor Bonus 
                break;    
            default:
        }
        return ac;
    };
    
	this.printStatBlock = function(web) {
        var carriageReturn = web ? '<BR />' : '\n';
        
        var output = this.characterName ;
        output += (web ? ' <B><U>' : ' ') + 'CR ' + this.printCR() + (web ? '</U></B>' : '') + carriageReturn;
        
        for (var i = 0, x = abilities.length; i < x; i++){
            output += this.ability[abilities[i]].printStat() + carriageReturn;
	    }
        output+= this.getArmorClass() + ' ; ' + this.getArmorClass("touch") + ' ; ' + this.getArmorClass("flatfoot");
        return output;
    };
};