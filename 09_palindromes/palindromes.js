function palindromes(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    
    // Compare the cleaned string with its reversed version
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Do not edit below this line
module.exports = palindromes;
