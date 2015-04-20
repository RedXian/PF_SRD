/**
 * 
 */

(function () {
    var app = angular.module("myApp", []).filter('signedNumber', function () {
        return function (input) {
            return (input < 0 ? "\u2212" : "\u002B") + Math.abs(input);
        };
    });

    app.controller("AbilityController", function () {
        this.abilities = abilities;
    });

    var abilityNames = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];
    var abilities = [];
    for (x in abilityNames) {
        abilities.push({
            name: abilityNames[x],
            baseScore: 10,
            ageModifier: 0,
            racialModifier: 0,
            itemModifier: 0,
            temporaryModifier: 0,
            adjusted: function () {
                return this.baseScore + this.ageModifier + this.racialModifier + this.itemModifier + this.temporaryModifier;
            },
            modifier: function () {
                return Math.floor(this.adjusted() / 2) - 5;
            },
            pointBuyCost: function () {
                return [-4, -2, -1, 0, 1, 2, 3, 5, 7, 10, 13, 17][this.baseScore - 7];
            }
        });
    }
})();