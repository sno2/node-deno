/**
 * Code adapted to mock event listener logic.
 *
 * MIT License
 *
 * Copyright 2018-2021 the Deno authors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

export type PermissionName =
  | "run"
  | "read"
  | "write"
  | "net"
  | "env"
  | "plugin"
  | "hrtime";

export type PermissionState = "granted" | "denied" | "prompt";

export interface RunPermissionDescriptor {
  name: "run";
  command?: string;
}

export interface ReadPermissionDescriptor {
  name: "read";
  path?: string;
}

export interface WritePermissionDescriptor {
  name: "write";
  path?: string;
}

export interface NetPermissionDescriptor {
  name: "net";
  host?: string;
}

export interface EnvPermissionDescriptor {
  name: "env";
  variable?: string;
}

export interface PluginPermissionDescriptor {
  name: "plugin";
}

export interface HrtimePermissionDescriptor {
  name: "hrtime";
}

export type PermissionDescriptor =
  | RunPermissionDescriptor
  | ReadPermissionDescriptor
  | WritePermissionDescriptor
  | NetPermissionDescriptor
  | EnvPermissionDescriptor
  | PluginPermissionDescriptor
  | HrtimePermissionDescriptor;

export interface PermissionStatusEventMap {
  change: Event;
}

export class PermissionStatus implements EventTarget {
  constructor(public readonly state: PermissionState) {}

  addEventListener<K extends keyof PermissionStatusEventMap>(
    type: K,
    listener: (this: PermissionStatus, ev: PermissionStatusEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void {}
  removeEventListener<K extends keyof PermissionStatusEventMap>(
    type: K,
    listener: (this: PermissionStatus, ev: PermissionStatusEventMap[K]) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void {}
  dispatchEvent(e: any): boolean {
    return true;
  }
}

export abstract class Permissions {
  static async query(desc: PermissionDescriptor) {
    return new PermissionStatus("granted");
  }

  static async revoke(desc: PermissionDescriptor) {
    return new PermissionStatus("denied");
  }

  static async request(desc: PermissionDescriptor) {
    return new PermissionStatus("granted");
  }
}

Object.freeze(Permissions);
