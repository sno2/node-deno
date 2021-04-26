import { atob, btoa } from "../../dist";

describe("atob", () => {
  it("simple", () => {
    expect(atob("aGVsbG8gd29ybGQ=")).toBe("hello world");
  });
});

describe("btoa", () => {
  it("simple", () => {
    expect(btoa("hello world")).toBe("aGVsbG8gd29ybGQ=");
  });
});
