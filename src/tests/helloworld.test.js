const codeModule = process.env.PACKAGE_NAME || "tasks";

test('Prints Hello World', () => {
    let lib = require(`../${codeModule}/helloworld.js`);
    expect(lib.getHelloWorld()).toBe('Hello World!');
});