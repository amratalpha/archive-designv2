# ADPF · Document & Archiving System — alternative design

Open START.html to present the set to a customer. No installation or server is required for the standalone review pages.

## Included
- 21 screen designs, each in English and Arabic (42 HTML pages under screens/).
- One fixed dark jade header with white logo treatment.
- Larger type, rounded cards, navigation and dashboard icons, accessible focus styling.
- index.html: the original simulated workflows with the shared redesign applied.
- Shared design system: alternative.css.

## Review behavior
Standalone pages support screen navigation, language switching and local table filtering. Workflow actions refer reviewers to the interactive prototype; these pages do not connect to live records. The prototype starts in a signed-in demo state. Sign out returns to its simulated sign-in screen.

## Brand implementation
The supplied guidelines define Emerald, Jade and Beige, supported by orange, gold and grey families. All 22 palette colors are declared in brand-tokens.json; RGB values are sampled from the supplied screenshot because numeric specifications were not shown. Secondary colors distinguish complex chart data. Red is reserved for negative chart values.

English uses Roboto and Arabic uses Noto Kufi Arabic, as requested. Regular, Medium, Semibold and Bold are bundled locally for both languages, with their open-source licenses. No font download is needed when presenting offline.

Google Material Symbols Rounded is bundled offline at weight 200, fill 0, grade 0 and optical size 24, with its license. White secondary logo treatment preserves the supplied logo. Decorative growth rays are recreated as SVG from the visual reference; they are not the original brand artwork files.

## Verification
Application view models checked for 18 routes in both languages, including task details and document libraries. One fixed dark header verified in the generated markup. All 42 generated review files checked for unresolved expressions, missing local resources, and navigation targets. Browser visual and responsive checks could not be completed because the preview connection was unavailable. Treat this set as a design prototype, not production software.

## Responsive navigation update
Fluid workspace widths, top-aligned page content, collapsing secondary rails, mobile document cards, and a reference-style account menu. Account appearance options change the workspace while the header stays dark. My settings opens the local settings page in the review set.
