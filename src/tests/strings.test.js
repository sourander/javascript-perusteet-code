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

    test('3 Laske vokaalit', () => {
        const lib = require(`../${codeModule}/strings.js`);
    
        expect(lib.countVowels("")).toBe(0);
        expect(lib.countVowels("aeiouAEIOU")).toBe(10);
        expect(lib.countVowels("aeiouyäö" + "aeiouyäö".toUpperCase())).toBe(16);
        expect(lib.countVowels("? H e l l o W o r l d !")).toBe(3);
    });

    test('4 Palindromitunnistin', () => {
        const lib = require(`../${codeModule}/strings.js`);
    
        expect(lib.isPalindrome("")).toBe(false);
        expect(lib.isPalindrome("!!!!!!")).toBe(false);
        expect(lib.isPalindrome("ÖäÖ")).toBe(true);
        expect(lib.isPalindrome("Ope, hikkaako kaakkihepo?!")).toBe(true);
        expect(lib.isPalindrome("Ei hikkaa!")).toBe(false);
    });
    
});
