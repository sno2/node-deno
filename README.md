# node-deno

A zero-dependency Node.js implementation of the Deno Runtime APIs.

> This library is currently under development and its API is subject to change with most of the tests still unimplemented.

## Links

<a href='https://ko-fi.com/thesno2' target='_blank'><img height='35' style='border:0px;height:46px;' src='https://az743702.vo.msecnd.net/cdn/kofi3.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' />

## Usage

```ts
const { Deno } = require("node-deno");
console.log(Deno.build.os);
```

### Polyfilling

If you would like to use `node-deno` to polyfill `Deno` into your plain JS projects to be ran on either runtime, then just include the following code at the top of your scripts:

```js
!globalThis.Deno && (global.Deno = require(".").Deno);
```

## Contributing

1. `npm install`

2. `npm run dev`

3. Change any of the files and watch your changes rebuild.

Personally, I like to create a `dev.js` file with the following code to test out my changes and then run them using `node dev`:

```ts
const { Deno } = require("node-deno");

(async () => {
  console.log(Deno); // check if it's working
})();
```

## Testing

To test the project using Jest, simply run the following command in your terminal:

```bash
npm test
```

## Breaking Changes

- `Deno.build.os`: Can be all of the supported operating systems supported by Node.js instead of just `"windows" | "linux" | "darwin"`. This shouldn't really affect that much code at all.

- `Deno.permissions`: All permissions are always going to be `granted`. To prevent errors, the methods that request changes always return the status that the call was asking for but it does not actually mean that permission is revoked in any way (i.e. `Deno.permissions.revoke({ name: "env" })` returns `true`).

- Follow the specification as closely as possible.

## Goals

- Resource Management

- Using Executables (i.e. `Deno.run` and `Deno.kill`)

- Reproduce `Deno.test` API (not `deno_std/testing`)

- Stable and Unstable versions of Deno runtime.

- Releasing `node-deno` versions for at least every single major release of `deno`.

- // TODO: add some more

## Non-goals

- Reproducing `Deno.permissions` behavior and other methods such as (`Deno.env`) on runtime.

- Having `node-deno` verions for every single minor `deno` release.

- // TODO: add some more

## License

[MIT](./LICENSE)
