# ibc-monitoring-ui

The web console of [`ibc-monitoring`](https://github.com/allinbits/ibc-monitoring):
the clients, routes and governance dashboards for IBC on gno.land, starting with
the gno.land ↔ Ethereum route. It is a static app (Vite + React + TypeScript)
that only reads `ibcmon`'s read-only API; any signature is prepared in the
browser and sent to the wallet, never to the API.

The design, including what each page shows and the security rules the console
follows (every chain string is untrusted text), is `docs/design.md` in
`ibc-monitoring`.

## Develop

Requirements: Node 24 with pnpm 10, and a running `ibcmon serve`.

```sh
pnpm install
pnpm dev        # hot reload; /api is proxied to http://127.0.0.1:8080
                # (IBCMON_API=http://host:port pnpm dev to change it)
pnpm lint
pnpm test
pnpm build      # dist/
```

## Deploy

Serve `dist/` as static files, with client-side routes falling back to
`index.html`. Two ways to reach the API:

- **Same origin (recommended).** One reverse proxy serves `dist/` and sends
  `/api/` to `ibcmon`, behind your access control. No configuration is needed
  on either side. See [`deploy/nginx.example.conf`](deploy/nginx.example.conf).
- **Another origin.** Build with the API's origin:
  `VITE_IBCMON_API=https://ibcmon.example pnpm build` (or set it in `.env`,
  see `.env.example`), and list the console's origin in the service's
  `instance.cors_origins`. The API sends CORS headers only to listed origins.

The history before this repository is the `web/` directory of
`ibc-monitoring`, extracted with its commits.
