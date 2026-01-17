import { describe, test, expect } from 'vitest';
import * as functions from "../src/functions-imd.js"

// returns a new object that contains all properties of data whose name is present in fields
test('returns new object that matches fields', () => {
    expect(functions.pickFields (
        { color: "blue", name: "Earth", solarSistem: "Milky Way"}, 
        ['name', 'color']
    )).toEqual(
        { color: "blue", name: "Earth" }
    );
})