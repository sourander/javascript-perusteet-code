const codeModule = process.env.PACKAGE_NAME || "tasks";

test('Prints Hello World', () => {
    let lib = require(`../${codeModule}/helloworld.js`);
    expect(lib.getHelloWorld()).toBe('Hello World!');
});


test('Do something else', () => {
    let lib = require("../tasks/helloworld.js");
    expect(lib.anotherHelloWorld()).toBe('Hello World!');
});