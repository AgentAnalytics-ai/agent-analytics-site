# Location landing pages

City-specific pages live under `/locations` and `/locations/[city]`.

## Layout

| Area | Path |
|------|------|
| Overview | `src/app/locations/page.tsx` |
| City template | `src/app/locations/[city]/page.tsx` |
| Data | `src/lib/cityData.ts` |
| Components | `src/components/locations/` |

## Adding a city

1. Open `src/lib/cityData.ts`.
2. Add an entry to the cities configuration with a unique `id` / `slug`, display name, state, coordinates, and any copy used by the templates.
3. Confirm the dynamic route resolves at `/locations/{slug}` and that metadata in the city page matches the new entry.

## Maps

If you embed Google Maps, use a server-side or build-time key pattern; do not expose unrestricted API keys in client-side code. Placeholder embeds should use a documented placeholder key name (for example `YOUR_API_KEY`) until a real key is configured in the host environment.
