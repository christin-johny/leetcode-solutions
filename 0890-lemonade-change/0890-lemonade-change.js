/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five = 0, ten = 0;

    for (let bill of bills) {
        if (bill === 5) {
            five++; // collect a $5
        } else if (bill === 10) {
            if (five === 0) return false; // must give $5 as change
            five--;
            ten++;
        } else { // bill === 20
            if (ten > 0 && five > 0) {
                ten--;  // give $10
                five--; // give $5
            } else if (five >= 3) {
                five -= 3; // give 3x $5
            } else {
                return false;
            }
        }
    }
    return true;
};
