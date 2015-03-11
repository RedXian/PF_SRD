Object.prototype.Wealth = function (options) {
    var denom = ["Copper","Silver", "Gold", "Platinum"];
    var value = [1, 100, 10000, 1000000];
    
    for (var i = 0, x = denom.length; i < x; i++) {
        this[denom[i]] = options[denom[i]] || 0;
    }
       
    this.weight = function () {
        for (var i = 0, x = denom.length, coins = 0; i < x; i++)
            coins += this[denom[i]];
        return Math.round(coins / 50);
    };
    
    this.totalValue = function () {
        for (var i = 0, x = denom.length, total = 0;i < x; i++) {
            total += this[denom[i]] * value[i];
        }
        return total;
    };
    
    this.addWealth = function (amount) {       
        for (var i = 0, x = denom.length; i < x; i++) {
            if (amount[denom[i]] > 0) {
                this[denom[i]] += amount[denom[i]];
            }
        }
        return true;
    };
       
    this.carryOver = function(coin) {
        var next = denom.indexOf(coin) + 1; 
        if (this[denom[next]] === undefined) { return false; }
        else {
            if (this[denom[next]] === 0) {   
                if (!this.carryOver(denom[next])) { return false; }
            }
            this[denom[next]] -= 1;
            this[coin] += value[next] / value[denom.indexOf(coin)];
            return true;
        }        
    };
    
    this.removeWealth = function (amount) {
        // To do? When Fails, return to original value
        for (var i = 0, x = denom.length;i < x; i++) {           
            if (amount[denom[i]] !== undefined && amount[denom[i]] > 0) {
                // deduct from lower denominations first
                for (var j = 0, overflow, rate; j < i; j++) {
                    rate = value[i] / value[j]; // conversion rate 
                    overflow = Math.floor((this[denom[j]]) / rate); // gets overflow amount (if any)
                    
                    // check if overflow exists
                    if (overflow > 0) {
                        // check if the amount deducted is greater than the overflow amount
                        if (overflow < amount[denom[i]]) {
                            amount[denom[i]] -= overflow;
                            this[denom[j]] -= overflow * rate;
                        } else {
                            this[denom[j]] -= amount[denom[i]] * rate;
                            amount[denom[i]] = 0;                            
                        }                        
                    }                        
                }
                
                // check there is enough to deduct.
                while (this[denom[i]] < amount[denom[i]] && amount[denom[i]] != 0) {
                    // Borrow from next denomination 
                    if (!this.carryOver(denom[i])) { return false; }  // Return if there is nothing to remove.
                }    
                
                this[denom[i]] -= amount[denom[i]]; 
            }
        }
        return true; // value removed successfully.
    };
    
    this.printWealth = function() {
        var output = "", nothing = true;
        for (var i = denom.length-1; i >= 0; i--) {
            if (this[denom[i]] > 0) {
                output += this[denom[i]] + denom[i].charAt(0).toLowerCase() + " ";
                nothing = false;
            }
        }
        return "Money: " + (nothing ? "none" : output);
    };
    
    this.normalise = function (coin) {
        // Default coin to last denomination
        if (coin === undefined) { coin = denom[denom.length-1]; }
        
        for (var i = 0, x = denom.indexOf(coin), excess, rate; i < x; i++) {
            rate = value[i + 1] / value[i]; // conversion rate to next denomination
            excess = Math.floor(this[denom[i]] / rate);
            
            this[denom[i]] -= excess * rate;
            this[denom[i+1]] += excess;                            
        }
        return this;
    };
};
