var romanToInt = function(s) {
    var validRoman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    var result = 0;
    var prevValue = 0;
    
    for (let i = s.length - 1; i >= 0; i--) {
        const roman = s[i];
        const value = validRoman[roman];

        if (value >= prevValue) {
            result += value;
        } else {
            result -= value;
        }

        prevValue = value;
    }

    return result;
};