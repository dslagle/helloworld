/**
 * Does cool math stuff. You would not understand.
 *
 * @param {number} x cool number
 * @param {number} y another cool number
 * @return {number} math stuff
 */
function doMath(x, y) {
    if (x < y) {
        return x + y;
    }
    else if (x === y) {
        return x * y;
    }

    return x - y;
}

/**
 * 
 * 
 * @param {number} x the number of values to return from the fibinacci sequence, must be > 0
 */
function fib(x) {
    if (x < 0) throw "Cannot return less than 0 values";

    if (x == 0) return [];
    if (x == 1) return [1];
    if (x == 2) return [1, 1];

    let seq = [1, 1];
    for (i = 1; i < x-1; i++) {
        seq[i+1] = seq[i] + seq[i-1];
    }

    return seq;
}

module.exports = { fib: fib, doMath: doMath };