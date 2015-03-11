


var character = new Character();
character.ability.Strength.setScore(18);
character.ability.Dexterity.setScore(15);
document.getElementById("statBlock").innerHTML = character.printStatBlock(true);
console.log(character.printStatBlock());

function calcSizeModifier(x_in) {
	var temp = 0.0;
	// coefficients
	var a = 8.0; //7.9191919191920563E+00;
	var b = -4.6; // -4.6195286195286540E+00;
	var c = 0.98; // 9.8989898989899361E-01;
	var d = -0.082; //-8.2491582491583060E-02;

	temp += a + b * x_in + c * Math.pow(x_in, 2.0) + d * Math.pow(x_in, 3.0);
	return Math.round(temp);
}

for(var i = 0; i <= 8; i++) {
    console.log(i + " : " + calcSizeModifier(i));
}

function Exponential_DoubleAsymptoticExponentialB_model(x_in)
	{
	var temp;
	temp = 0.0;

	// coefficients
	var a = -5.0794421378539901E+03;
	var b = 3.4894926550372984E-01;
	var c = 5.6108170791295175E-93;
	var d = 1.1196115149439912E+01;

	temp = a * (1.0 - Math.exp(b * x_in)) + c * (1.0 - Math.exp(d * x_in));
	return temp;
}


for(var i = 1; i<=20; i++) {
    console.log("Level " + i + " = " + Exponential_DoubleAsymptoticExponentialB_model(i));
}