import { describe, test, expect } from 'vitest';
import * as functions from "../src/functions-beg.js";

// minutes to hours
describe ('minutes to hours', () => {
    test('minutes to full hours', () => {
        expect(functions.minutesToHours(60)).toBe(1);
        expect(functions.minutesToHours(120)).toBe(2);
    });

    test('minutes to half hours', () => {
        expect(functions.minutesToHours(150)).toBe(2.5);
        expect(functions.minutesToHours(30)).toBe(0.5);
    });
})

// average
test('average', () => {
    expect(functions.average(1, 2, 3, 4)).toBe(2.5);
    expect(functions.average(10, 20)).toBe(15);
    expect(functions.average(5, 10, 15, 20, 25)).toBe(15);
})

// concatenate
test('concatenate using separator', () => {
    expect(functions.concat('-', 'one', 'two', 'three', 'four')).toBe('one-two-three-four');
    expect(functions.concat('1', 'hello', 'world', 'today')).toBe('hello1world1today');
    expect(functions.concat('+', 'a', 'b')).toBe('a+b');
})

// largest number
test('largest number', () => {
    expect(functions.biggest(3, 6, 2, 8, 4)).toBe(8);
    expect(functions.biggest(1, 4, 3)).toBe(4);
    expect(functions.biggest(1)).toBe(1);
})

// months to wait
describe('months to wait', () => {
    test('months to wait success', () => {
        expect(functions.monthsToWait(11, 0)).toBe(1);
        expect(functions.monthsToWait(0, 3)).toBe(3);
    })

    test('months to wait error', () => {
        expect(() => functions.monthsToWait(12, 1)).toThrow('Invalid month index');
        expect(() => functions.monthsToWait(-1, 1)).toThrow('Invalid month index');
        expect(() => functions.monthsToWait(1, 13)).toThrow('Invalid month index');
        expect(() => functions.monthsToWait(1, -3)).toThrow('Invalid month index');
    });
})

// last N revert
describe('last n letters and revert', () => {
    test('last n letters, n <= string length', () => {
        expect(functions.lastNRevert('t-shirts', 4)).toBe('stri');
        expect(functions.lastNRevert('Jon Doe', 3)).toBe('eoD');
    })

    test('last n letters if n >= string length', () => {
        expect(functions.lastNRevert('hello', 12)).toBe('olleh');
        expect(functions.lastNRevert('world', -1)).toBe('dlrow');
    })
})

// get business address from obj
test('returns formatted business address', () => {
    const business = {
        address: {
            number: 3,
            zipCode: 123500,
            street: "Avenuepark"
        },
        name: "100 Functions ltd."
    };
    
    expect(functions.getBusinessAddress(business)).toBe("Avenuepark, number 3, 123500");
})

// are all nums even?
test('all nums are even', () => {
    expect(functions.areAllNumsEven([2, 4, 6, 8])).toBe(true);
    expect(functions.areAllNumsEven([12, 22, 1, 40])).toBe(false);
})

// largest num in 2 arrays
test('get largest sum in 2 arrays', () => {
    expect(functions.maxInArr([7, 2, 9],[15, 28, 42])).toBe(42);
    expect(functions.maxInArr([4, 1, 11],[0, 1, 5])).toBe(11);
})

// longest string in array
test('get longest string in array', () => {
    expect(functions.arrayOfStrings(['Montgomery', 'Juneau', 'Phoneix', 'Little Rock', 'Washington, D.C.', 'Hartford', 'Tallahassee'])).toBe('Washington, D.C.');
})

// character at step
test('grab character at step in message', () => {
    expect(functions.charAtStep('Which framework should I choose?', 6)).toBe('Wfoo e');
    expect(functions.charAtStep('abcdefgh', 3)).toBe('adg');
})

// most occurrences of char in strings
test('string with most occurrences of a character', () => {
    expect(functions.mostRepeat('a', 'Los Angeles', 'Tokyo')).toBe('Los Angeles');
})

// job matches employee object
describe('new array of employees that match job', () => {
    test('empty array if input is not array', () => {
        expect(functions.getJob('abc', 'developer')).toEqual([]);
    })

    test('returns new array of jobs that match job', () => {
        expect(functions.getJob([
            { age: 28, job: "developer", name: "Alice" },
            { age: 35, job: "designer", name: "Bob" },
            { age: 42, job: "manager", name: "Charlie" },
            { age: 31, job: "developer", name: "David" }
        ], 'developer')).toEqual([
            { age: 28, job: "developer", name: "Alice" },
            { age: 31, job: "developer", name: "David" }
        ]);
    })
})

// ascending or descending array
test('ascending array', () => {
    expect(functions.isSorted([19, 20, 23])).toBe(false);
    expect(functions.isSorted([19, 20, 21])).toBe(true);
    expect(functions.isSorted([20, 19, 18])).toBe(true);
})