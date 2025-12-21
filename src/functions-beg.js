// receives a num of minutes and returns a num converted in hours
export function minutesToHours(mins) {
    return mins/60;
}

// receives nums as params and returns the mathematical avg between them
export function average(...numbers) {
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
}

// receives strings and separator and should concatenate the strings using the provided separator
export function concat(separator, ...strings) {
    return strings.reduce((result, string, index) => {
        if (index === 0) {
            return string; // first one has no separator beforehand
        }
        return result + separator + string;
    });
}

// receives nums and returns the biggest one
export function biggest(...numbers) {
    return Math.max(...numbers);
}

// receives 2 nums as params that represent the index of 2 months. the function should return the nums we have to wait to get from the first month to the second
export function monthsToWait(index1, index2) {
    // return error if index <0 or >11
    if (index1 < 0 || index1 > 11 || index2 < 0 || index2 > 11) {
        throw new Error('Invalid month index');
    }
    return (index2 - index1 + 12) % 12; // using modulo for circular problems
}

// receives string and num, returns the last num characters of string in reverse order
export function lastNRevert(str, n) {
    // if n is negative or >= string length, use entire string
    if (n <= 0 || n >= str.length) {
        return [...str].reverse().join('');
    }
    // get last n characters then reverse
    const lastN = str.slice(-n);
    return [...lastN].reverse().join('');
}

// receives an obj that represents a business as params and returns a string representing its address
export function getBusinessAddress(business) {
    const { street, number, zipCode } = business.address;
    return `${street}, number ${number}, ${zipCode}`;
}

// receives an arr of nums, returns boolean indicating if all nums in array are even or not
export function areAllNumsEven(numbers) {
    for (let num of numbers) {
        if (num % 2 !== 0) {
            return false;
        }
    }
    return true;
}

// returns the biggest num in between 2 arrays
export function maxInArr(arr1, arr2) {
    const maxArr1 = arr1.reduce((accumulator, currentVal) => Math.max(accumulator, currentVal), 0);
    const maxArr2 = arr2.reduce((accumulator, currentVal) => Math.max(accumulator, currentVal), 0);
    return Math.max(maxArr1, maxArr2);
}

// returns longest string in array. if there are multiple with the same max length, return the first one
export function arrayOfStrings(arr) {
    if (arr.length === 0) return '';
    let longest = '';
    for (const str of arr) {
        if (typeof str === 'string' && str.length > longest.length) {
            longest = str;
        }
    }
    return longest;
}

// receives 2 params (msg and step) and returns new string composed of all characters from msg that are on positions divisible by step
export function charAtStep(msg, step) {
    let result = '';
    for (let i = 0; i < msg.length; i += step) {
        result += msg.charAt(i);
    }
    return result;
}

// returns the string that has the most occurrences of a character amongst strings
export function mostRepeat(char, ...strings) {
    let maxCount = 0;
    let maxString = strings[0];

    for (const str of strings) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) === char) {
                count ++
            }
        }
        if (count > maxCount) {
            maxCount = count;
            maxString = str;
        }
    }

    return maxString;
}