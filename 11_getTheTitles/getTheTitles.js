const getTheTitles = function(books) {
    let output = [];
    for (let book of books) {
        output.push(book.title);
    }
    return output;
};

// Do not edit below this line
module.exports = getTheTitles;
