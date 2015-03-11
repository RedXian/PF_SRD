Object.prototype.Coin = function (startAmount) {
    var denom = ["Copper","Silver", "Gold", "Platinum"];
    var value = [1, 100, 10000, 1000000];
    
    for (var i = 0, x = denom.length; i < x; i++) {
        this[denom[i]] = startAmount[denom[i]] || 0;
    }
};