# Changelog - lindas-ld-widget

## 2026-02-16

### Fixed
- Fix app.component.spec.ts: remove boilerplate tests referencing non-existent `title` property and `.content span` element, update to test actual component with router-outlet
- Add `test_YYYY-MM-DD_HHmmss` tag to Docker build workflow for Flux image automation
- Align promote/rollback workflow to use `test_*` tags for TEST rollback

## 2026-02-15

### Added
- Promote/rollback workflow (`promote.yaml`) via `workflow_dispatch`
  - Action dropdown: promote, rollback-test, rollback-int, rollback-prod
  - Promote: retags source image as `int_YYYY-MM-DD_HHMMSS` then `prod_YYYY-MM-DD_HHMMSS`
  - Rollback: retags a previous image with a new timestamp so Flux picks it up
  - Uses `docker buildx imagetools create` for zero-layer-pull retagging (no rebuild)
