const Greeter = require('repo-template');

let defaultGreeting = 'Hello';
let name = 'Test';

let greeter = new Greeter(defaultGreeting);

console.log(greeter.Greet(name));