function getHelloWorld() {
  return "Hello World!";
}

// Alternative:
const anotherHelloWorld = () => "Hello World!";

console.log(getHelloWorld());
console.log(anotherHelloWorld());

// export default getHelloWorld;
export {getHelloWorld, anotherHelloWorld}