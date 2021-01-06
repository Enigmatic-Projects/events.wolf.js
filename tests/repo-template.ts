"use strict";

import Greeter from "../lib/Greeter";
import expect from "expect.js";

describe("Greeter", () => {
  describe("No Default Greeting, with no Name", () => {
    let greeting: string = new Greeter().Greet();
    expect(greeting).to.be("Hello, Anonymous!");
  });

  describe("No Default Greeting, with Name", () => {
    let greeting: string = new Greeter().Greet("Test");
    expect(greeting).to.be("Hello, Test!");
  });

  describe("Default Greeting, with no Name", () => {
    let greeting: string = new Greeter("Welcome").Greet();
    expect(greeting).to.be("Welcome, Anonymous!");
  });

  describe("Default Greeting, with Name", () => {
    let greeting: string = new Greeter("Welcome").Greet("Test");
    expect(greeting).to.be("Welcome, Test!");
  });
});
