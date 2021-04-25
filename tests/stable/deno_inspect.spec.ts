import { Deno } from "../../";

describe("Deno.inspect", () => {
  it("Inspecting Primitives", () => {
    expect(Deno.inspect(23)).toBe("23");
    expect(Deno.inspect("hello")).toBe("'hello'");
    expect(Deno.inspect(true)).toBe("true");
  });

  it("Inspecting Small Object Literals", () => {
    expect(Deno.inspect({ age: 43 })).toBe("{ age: 43 }");
    expect(Deno.inspect({ person: { age: 43 } })).toBe(
      "{ person: { age: 43 } }"
    );
  });

  it("Inspecting Functions", () => {
    function add(a: number, b: number) {
      return a + b;
    }
    expect(Deno.inspect(add)).toBe("[Function: add]");

    const subtract = (a: number, b: number) => a - b;
    expect(Deno.inspect(subtract)).toBe("[Function: subtract]");
  });

  it("Inspecting Classes", () => {
    class Person {
      constructor(public age: number) {}
    }

    expect(Deno.inspect(Person)).toBe("[class Person]");

    expect(
      Deno.inspect(
        class {
          constructor(public age: number) {}
        }
      )
    ).toBe("[class (anonymous)]");

    expect(Deno.inspect(new Person(23))).toBe("Person { age: 23 }");

    expect(
      Deno.inspect(
        new (class {
          constructor(public age: number) {}
        })(23)
      )
    ).toBe("{ age: 23 }");
  });
});
