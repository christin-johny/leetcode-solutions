/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = 0;
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    while (x !== 0) {
        let digit = x % 10;
        x = (x / 10) | 0; 
        if (rev > INT_MAX / 10 || (rev === INT_MAX / 10 && digit > 7)) return 0;
        if (rev < INT_MIN / 10 || (rev === INT_MIN / 10 && digit < -8)) return 0;

        rev = rev * 10 + digit;
    }

    return rev;
};