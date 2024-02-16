const sumAll = function(start, end) {
    let output = 0;
    if(typeof start != 'number' || typeof end != 'number' || start < 0 || end < 0) {
        return "ERROR";
    }
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }
    for(let i = start; i <= end; i++) {
        output += i;
    }
    return output;
};

// Do not edit below this line
module.exports = sumAll;
