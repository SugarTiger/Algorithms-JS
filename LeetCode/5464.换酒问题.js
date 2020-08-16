/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    if (numBottles < numExchange) return numBottles;
    var max = numBottles;
    var a = Math.floor(numBottles / numExchange);
    while (a >= 1) {
        let remainder = numBottles % numExchange;
        max += a;
        numBottles = a + remainder;
        a = Math.floor(numBottles / numExchange);
    }
    return max;
};


// numWaterBottles(9, 3);
// numWaterBottles(10, 3);
// numWaterBottles(15, 4);
// numWaterBottles(5, 5);
numWaterBottles(2, 3);
numWaterBottles(1, 2);