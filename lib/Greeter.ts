export default class Greeter {
  DefaultGreeting: string;

  constructor(defaultGreeting?: string) {
    this.DefaultGreeting = defaultGreeting ?? "Hello";
  }

  Greet(name?: string): string {
    return `${this.DefaultGreeting}, ${name ?? "Anonymous"}!`;
  }
}
