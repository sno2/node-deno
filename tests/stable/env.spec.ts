import { Deno } from "../../";

describe("Deno.env", () => {
  const snapshots = {
    dontThrow: ["PLEASE_DONT_THROW", "thanks"],
    gettingUndefinedOne: ["NOT_A_REAL_THING_32"],
    gettingAndSetting: ["NODE_DENO_0", "foo"],
    convertingToObj: ["HELLO_WORLD_NODE_DENO", "asdf"],
  } as const;

  it("Setting env doesn't throw", () => {
    Deno.env.set(...snapshots.dontThrow);
  });

  it("Getting `undefined` env doesn't throw", () => {
    const val = Deno.env.get(...snapshots.gettingUndefinedOne);
    expect(val).toBeUndefined();
  });

  it("Getting and setting env", () => {
    const [key, value] = snapshots.gettingAndSetting;
    Deno.env.set(key, value);
    const res = Deno.env.get(key);
    expect(res).toBe(value);
  });

  it("Deleting an env value", () => {
    const testingKey = "NODE_DENO_12";
    Deno.env.set(testingKey, "foo");
    Deno.env.delete(testingKey);
    expect(Deno.env.get(testingKey)).toBeUndefined();
  });

  it("Converting env to object", () => {
    const [key, value] = snapshots.convertingToObj;
    Deno.env.set(key, value);
    const obj = Deno.env.toObject();
    expect(obj[key]).toBe(value);
  });

  it("Cleanup ENV", () => {
    for (const [key, _] of Object.values(snapshots)) {
      Deno.env.delete(key);
    }
  });
});
