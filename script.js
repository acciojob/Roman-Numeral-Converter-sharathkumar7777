const symbols = [
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1]
];

function convertToRoman(num) {
    let result = '';

    for (let i = 0; i < symbols.length; i++) {
        const symbol = symbols[i][0];
        const value = symbols[i][1];

        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

module.exports = convertToRoman;
