import util from "util";

export interface InspectOpts {
  colors?: boolean;
  compact?: boolean;
  depth?: number;
  iterableLimit?: number;
  showProxy?: boolean;
  sorted?: boolean;
  trailingComma?: boolean;
  getters?: boolean;
  showHidden?: boolean;
}

export function inspect(obj: unknown, opts?: InspectOpts) {
  return util.inspect(obj, {
    ...opts,
    maxArrayLength: opts?.iterableLimit,
  });
}
