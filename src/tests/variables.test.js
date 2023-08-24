const codeModule = process.env.PACKAGE_NAME || "tasks";

describe("Osio 1: Ensimmäiset askeleet", () => {

    test('1 Muuttujat', () => {
        const lib = require(`../${codeModule}/variables.js`);

        // Number
        expect(typeof lib.my_number).toBe('number');
        expect(lib.my_number).toBeDefined();

        // String
        expect(typeof lib.my_string).toBe('string');
        expect(lib.my_string.length).toBeGreaterThanOrEqual(1);

        // Bool
        expect(typeof lib.my_bool).toBe('boolean');

        // Array
        expect(Array.isArray(lib.my_array)).toBe(true);
        expect(lib.my_array.length).toBeGreaterThanOrEqual(1);

        // Object
        expect(typeof lib.my_object).toBe('object');
        expect(Object.keys(lib.my_object).length).toBeGreaterThanOrEqual(1);
    });

});