const isValidSigns = (str) => {
    const checkStr = [];
    let isSuccess = false;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
            checkStr.push(str[i]);
        } else if (str[i] === ')' || str[i] === ']' || str[i] === '}') {
            if (checkStr.length === 0 || checkStr[checkStr.length - 1] !== correctSignBefore(str[i])) {
                return isSuccess;
            }
            checkStr.pop();
        }
    }

    isSuccess = checkStr.length === 0;

    return isSuccess;
};

const correctSignBefore = (sign) => {
    switch (sign) {
        case ')': 
            return '(';
        case ']': 
            return '[';
        case '}': 
            return '{';
        default: 
            return '';
    }
};