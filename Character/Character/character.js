/**
 * 
 */
function Character(name){
	this.name = name;
	this.experience = 1;
	this.level = 0;
}

function addLevel(className) {
	if (this.level < 20) {
		this.level++;
		
		return this.level;
	}
	else {
		return -1;
	}
}

Character.prototype = {
};