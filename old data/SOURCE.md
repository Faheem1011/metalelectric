# Legacy website source record

- **Source:** https://www.metalectrics.com/
- **Captured:** 2026-07-24
- **Platform detected:** Hostinger Horizons/Vite React single-page application
- **Public routes captured:** `/`, `/products`, `/about`, `/contact`, `/get-quote`
- **Catalogue count:** 8 visible products

The extraction in this directory contains public business content, product specifications, sale prices, image references, categories, and contact information needed to rebuild the site. It deliberately excludes third-party email-service credentials that were exposed in the old client bundle; those credentials must be rotated or retired, not migrated.

## Migration notes

1. Apply `database/initial-schema.sql` before `new data/legacy-catalog-seed.sql`.
2. The first import preserves remote image URLs so the catalog is visually complete immediately.
3. Move images into the `product-images` Supabase bucket before launch to eliminate third-party image hosting; `scripts/migrate-legacy-images.mjs` performs that one-time operation with a temporary server-only key.
4. Confirm all pricing and specifications with Metalectrics before publishing. The source data is a snapshot, not a perpetual source of truth.
