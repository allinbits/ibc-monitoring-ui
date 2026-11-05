// Where the console reads ibcmon's API. Empty (the default): the same origin,
// with a reverse proxy sending /api/ to ibcmon. Otherwise the API's origin,
// set at build time with VITE_IBCMON_API; that origin must list the console's
// own in instance.cors_origins.
export function apiURL(base: string | undefined, path: string): string {
  return (base ?? "").trim().replace(/\/+$/, "") + path;
}

export const apiBase: string = import.meta.env.VITE_IBCMON_API ?? "";
