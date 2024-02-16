const removeFromArray = function(arr, ...elementsToRemove) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if (!elementsToRemove.includes(arr[i])) {
            output.push(arr[i]);
        }
    }
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
