const codeModule = process.env.PACKAGE_NAME || "tasks";

describe("Osio 2: Sanat ja lauseet", () => {

    test('1 Generoi zipin nimi', () => {
        const lib = require(`../${codeModule}/strings.js`);
        
        const result = lib.generateZipName("myApp", "1.0", "x86_64", "zip");
        expect(result).toBe("myApp-1.0-x86_64.zip");
    });

    test('2 Sisältääkö B A:n', () => {
        const lib = require(`../${codeModule}/strings.js`);

        expect(lib.isAInB("kar hu", "Oho, KAR HU!")).toBe(true);
        expect(lib.isAInB("aaa", "bbb")).toBe(false);
        expect(lib.isAInB("", "Non empty string")).toBe(false);
    });
});
