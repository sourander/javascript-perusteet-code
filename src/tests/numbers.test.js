const codeModule = process.env.PACKAGE_NAME || "tasks";

describe("Osio 3: Numerot", () => {

    test('1 Celsius Fahrenheitiksi', () => {
        const lib = require(`../${codeModule}/numbers.js`);
        
        expect(lib.celsiusToFahrenheit(0)).toBe(32);
        expect(lib.celsiusToFahrenheit(100)).toBe(212);
        expect(lib.celsiusToFahrenheit(-40)).toBe(-40);
        expect(lib.celsiusToFahrenheit(37)).toBe(98.6);
    });

    test('2 Jaollinen numeroilla', () => {
        const lib = require(`../${codeModule}/numbers.js`);
    
        expect(lib.divisibleWithAll(10, 1, 2, 5)).toBe(true);
        expect(lib.divisibleWithAll(10, 6)).toBe(false);
    
        // Test error case
        expect(() => lib.divisibleWithAll(10, 1.3)).toThrowError(TypeError);
    });
    

});
