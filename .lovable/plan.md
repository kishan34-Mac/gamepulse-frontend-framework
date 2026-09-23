# GAMEPULSE Frontend Plan

## Goal
Build a complete, frontend-only gaming publication with a dark-first cinematic editorial identity, centralized mock content, reusable presentation components, local interactions, and all requested routes.

## Foundation
- Define a semantic dark/light design system in `src/styles.css` with editorial typography, restrained violet/cyan accents, consistent spacing, borders, shadows, focus states, and reduced-motion behavior.
- Add centralized brand configuration and typed models for articles, authors, categories, games, reviews, products, and future sponsored/CMS fields.
- Add a mock content service so every page reads replaceable centralized data rather than embedding content arrays.
- Generate a cohesive set of cinematic gaming images and covers for the homepage, articles, games, reviews, and products.

## Shared Experience
- Build the sticky desktop header, responsive mobile menu, active route states, functional dark/light theme toggle, and keyboard-accessible search modal.
- Build the site footer with publication links, social destinations, description, and newsletter form.
- Add reusable article, feature, compact, review, game, product, breadcrumb, pagination, ad-slot, newsletter, and editorial-section components.
- Add polished skeleton, empty, error, and 404 presentations.

## Pages and Routes
- `/`: editorial homepage with hero, trending rail, latest news, editor picks, reviews, guides, PC, mobile, esports, gear, newsletter, and subtle ad placements.
- `/news`, `/reviews`, `/guides`, `/pc-gaming`, `/mobile-gaming`, `/esports`: reusable category layouts with distinct copy, featured/latest/popular/trending content, and local load-more behavior.
- Article details for each content family at `/:category/:slug`: reading progress, metadata, share controls, hero image, responsive table of contents, structured article blocks, FAQ, author, related stories, newsletter, and previous/next navigation.
- `/reviews/:slug`: game summary, score system, verdict, pros/cons, category ratings, and related coverage.
- `/games/:slug`: game hero, metadata, and linked news/reviews/guides/videos/related games.
- `/search`: local search with initial, loading, results, no-results, and recent/popular search states.
- `/about`, `/contact`, `/privacy-policy`, `/terms`, `/disclaimer`, and `/404`: complete publication and legal-placeholder pages, with local-only contact handling.

## Interaction and SEO
- Keep all navigation client-side with working active states, browser history, mobile-menu closing, and focus handling.
- Implement local newsletter/contact validation, copy-link sharing, search filtering, collapsible mobile contents, image lazy loading, and restrained transitions.
- Add unique route metadata for every content route, plus canonical/Open Graph/Twitter tags and appropriate article, breadcrumb, and FAQ structured data where applicable.

## Validation
- Check generated route integrity and current build diagnostics.
- Exercise navigation, search, newsletter, theme, menu, article, review, game, copy-link, and 404 flows in the live preview.
- Visually inspect desktop and mobile layouts, including 320px and wide desktop, and fix overflow, overlap, accessibility, loading, empty-state, or console issues found.

## Scope Guardrail
Phase 1 remains frontend-only: no backend, database, authentication, CMS, real APIs, advertising scripts, affiliate tracking, comments, or payment integrations.
