Object.prototype.Ability = function(name, score) {
	this.name = name.charAt(0).toUpperCase + name.slice(1).toLowerCase();
	this.abbr = name.substring(0,3).toUpperCase();
	this.score =  score || 10;
    
    this.getName = function() { return this.name; };	
   
    this.getAbbr = function() { return this.abbr; };
	this.setAbbr = function(newAbbr) { this.abbr = newAbbr.toUpperCase(); };
	
	this.getScore = function() { return this.score; };
    this.setScore = function(newScore) { 
        if (newScore <= 18 && newScore >= 7) {
            this.score = newScore; 
            return true;
        }
        else {
            return false;
        }        
    }; 
	
	this.incScore = function() { 
		if (this.score < 18) {
			this.score++; 
			return true;
		}
		else {
			return false;
		}
		//return (this.score < 18) ? ++this.score : false;
	};
	
	this.decScore = function() { 
  		if (this.score > 7) {
			this.score--; 
			return true;
		}
		else {
			return false;			
		}
		//return (this.score > 7) ? --this.score : false;
	};
	
	this.getModifier = function(print) { 
	    var modifier = Math.floor(this.score / 2) - 5;
        return (print && this.score > 11 ? "+" + modifier : modifier) ;
	};
	this.pointBuyCost = function() {
		var pointBuyCost = [-4, -2, -1, 0, 1, 2, 3, 5, 7, 10, 13, 17];  // Pathfinder Pointbuy
        return pointBuyCost[this.score - 7];
	};
	
	this.toString = function() {
		return this.abbr + ' ' + this.score + ' (' + this.getModifier(true) + ')'; 
	};
};
