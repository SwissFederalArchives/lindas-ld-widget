# lindas-ld-widget Changelog

**Repository:** SwissFederalArchives/lindas-ld-widget
**Description:** LINDAS LD Widget - Angular component for Linked Data entity lookup

---

## January 2026

### 2026-01-26

**DevOps Pipeline Implementation**
- Created `develop` branch for development workflow
- Updated `docker.yaml` to build and auto-deploy to TEST on main push
- Added `deploy-test.yaml` for manual TEST environment override
- Added `deploy-int.yaml` for manual INT environment promotion
- Added `deploy-prod.yaml` for manual PROD deployment (requires approval)
- Added `rollback-test.yaml` for one-click TEST rollback
- Added `rollback-int.yaml` for one-click INT rollback
- Added `rollback-prod.yaml` for one-click PROD rollback (requires approval)
- Each environment maintains a `-previous` tag for instant rollback capability
- Note: Uses SHA tags for deployment tracking (package.json version is 0.0.0)

---

## December 2025

### 2025-12-11

**`01f9e82` - Upgrade Angular 17 to 19.2.16 to fix security vulnerabilities**
- **Security Fix:** Upgraded Angular to fix security vulnerabilities
- Major version upgrade from Angular 17 to 19.2.16

---

## October 2025

### 2025-10-17

**`94a3d8f` - Replace Docker workflow with proven varnish-post pattern**
- Enable multi-arch builds
- Added permissions block for GHCR

**`4960dfd` - Add workflow_dispatch to Docker workflow for manual testing**
- Enabled manual workflow triggering

**`b91b427` - Simplify Docker workflow to match zazuko pattern**
- Simplified Docker workflow

**`3b9e49c` - Add workflow_dispatch to Docker workflow for manual triggering**
- Added manual trigger capability

**`0a1322b` - Trigger Docker workflow to test image generation**
- Testing Docker workflow

**`c1b594f` - Test Docker workflow trigger**
- Testing workflow trigger

**`913d1aa` - Add explicit permissions to Docker workflow for GHCR push**
- Fixed GitHub Container Registry permissions

**`5f0cc2c` - Fix Docker workflow: update action versions and registry name**
- Updated GitHub Actions versions
- Fixed registry name

---

## 2024

### March 2024

**`f379f8c` - readme update**
- Updated documentation

**`d7d8ce8` - make template more strict**
- Improved template validation

**`2743160` - migrate template control flow**
- Migrated to new Angular control flow syntax

**`92d5d72` - ng update**
- Angular framework update

### August 2023

**`13f2d22` - add the ability to rename the button**
- Added button label customization

**`225a7b1` - update angular**
- Angular update

### July 2023

**`3a19619` - add autocomplete attribute**
- Added autocomplete support

**`30f0e06` - example with prod endpoint and not int**
- Updated example configuration

**`848a941` - update to angular 16**
- Upgraded to Angular 16

### April 2023

**`7955b3b` - update example with int.lindas.admin.ch**
- Updated example endpoint

### March 2023

**`d720b45` - ci: build and push Docker image**
- Added Docker CI/CD

**`c62dad4` - docker: create image**
- Created Docker image configuration

---

## Summary

### Security Fixes
- Angular 17 -> 19.2.16 upgrade to fix vulnerabilities

### Infrastructure
- Multi-arch Docker builds
- GitHub Container Registry publishing
- Improved CI/CD workflows

### Features
- Button label customization
- Autocomplete support

---

*Last updated: 2025-12-15*
