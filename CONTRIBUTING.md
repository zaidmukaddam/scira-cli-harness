# Contributing

Thanks for helping improve Scira CLI Harness.

## Development setup

1. Install [Bun](https://bun.sh/).
2. Clone the repository and install dependencies:

   ```bash
   bun install
   ```

3. Copy `.env.example` to `.env.local` and add the API keys you need for your change.

4. Run TypeScript checks and build:

   ```bash
   bun run typecheck
   bun run build
   ```

## Pull requests

- Keep changes focused on one concern when possible.
- Update `README.md` if you change user-facing behavior, env vars, or commands.
- Do not commit secrets, `.env.local`, or generated `dist/` output (CI builds from source).

## Forks and mirrors

If you publish under a different GitHub owner, update the clone URL in `README.md` and the `repository`, `bugs`, and `homepage` fields in `package.json`. Enable **Security advisories** on the repo if you want private reports (see `SECURITY.md`).

## Benchmark charts (optional)

The `visualize_benchmark.py` script generates PNGs into `benchmark_charts/` (gitignored). Use [uv](https://docs.astral.sh/uv/) to run it:

```bash
uv run visualize_benchmark.py
```

Commit script and data changes; generated images are left local unless you intentionally attach them to a release or discussion.
