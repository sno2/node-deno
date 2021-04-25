export abstract class Env {
  static get(key: string): string | undefined {
    return process.env[key];
  }

  static set(key: string, value: string): void {
    process.env[key] = value;
  }

  static delete(key: string): void {
    delete process.env[key];
  }

  static toObject(): Record<string, string> {
    // must purge all keys with `undefined` values manually to maintain type integrity
    const draft: Record<string, string> = {};
    for (const [key, value] of Object.entries(process.env)) {
      if (value === undefined) continue;
      draft[key] = value!;
    }
    return draft;
  }
}

Object.freeze(Env);
