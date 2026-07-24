# Performance report

**Evidence state:** measured on the production build — 2026-07-24

## Lighthouse CI

| Route | Performance | Accessibility | Best practices | SEO |
| --- | ---: | ---: | ---: | ---: |
| `/` | 0.99 | 1.00 | 1.00 | 1.00 |
| `/films` | 0.99 | 1.00 | 1.00 | 1.00 |
| `/sources` | 1.00 | 1.00 | 1.00 | 1.00 |

The reports are generated locally in `.lighthouseci/` and excluded from source control. The measured routes meet the current CI thresholds in `.lighthouserc.cjs`.

## Remaining production work

These measurements cover the semantic CSS reading tier. The real-time WebGL world is intentionally not mounted while its story-matter renderer is rebuilt, so device-tier GPU, memory, context-loss, and replay-stability evidence remains unsigned.
