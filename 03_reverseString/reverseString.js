const reverseString = function(word) {
    let output = "";
    let chars = word.split("");
    for(let i = chars.length - 1; i >= 0; i--) {
        output += chars[i];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
