import { TextEncoder as TextEncoder_, TextDecoder as TextDecoder_ } from "util";

// gotta make 'em follow spec

interface TextEncoder {
  new (): this;
  encode(s: string): Uint8Array;
  readonly encoding: "utf-8";
}

interface TextDecoder {
  new (): this;
  decode(arr: Uint8Array): string;
  readonly encoding: "utf-8";
}

export const TextEncoder = (TextEncoder_ as unknown) as TextEncoder;
export const TextDecoder = (TextDecoder_ as unknown) as TextDecoder;
