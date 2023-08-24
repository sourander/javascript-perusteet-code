const codeModule = process.env.PACKAGE_NAME || "tasks";

describe("Osio 0: Esitehtävä", () => {
    test('1 Hello World', () => {
        let lib = require(`../${codeModule}/helloworld.js`);
        expect(lib.getHelloWorld()).toBe('Hello World!');
    });
});