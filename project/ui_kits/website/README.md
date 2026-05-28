# Website UI kit · Jerusalem East & West Orchestra

A hi-fi recreation of what the orchestra's marketing website would look like, built from the 2026/2027 season visual package. **There is no real production codebase** — this is a designed prototype to make future product work easier.

## What's here

- `index.html` — full assembled homepage (Hebrew, RTL). Open this first.
- `Header.jsx` — top nav with badge logo, season selector, language toggle, ticket CTA
- `Hero.jsx` — full-bleed terracotta hero with wings illustration and season title
- `SeasonGrid.jsx` — 2×2 grid of concert posters, matching the printed postcard layout
- `ConcertCard.jsx` — list-style concert card with date stack + title + CTA
- `Footer.jsx` — minimal navy footer with logo, ministry credit, social links

## What's intentionally not here

- A booking flow (cart, seat-picker, payment). The brand for those interactions would need user input.
- A program-notes article template. Long-form editorial would extend the kit.
- An English/Arabic version. The RTL Hebrew default is fully working; the structural tokens support flipping `dir` but no `en/` or `ar/` content is provided.
- Real ticket pricing or schedule data — all dates and venues are illustrative.

## How to use components

Each `.jsx` file exports a single component to `window` (no module system) so they can be loaded as plain Babel scripts. To compose your own page:

```html
<script type="text/babel" src="Header.jsx"></script>
<script type="text/babel" src="Hero.jsx"></script>
<script type="text/babel">
  const App = () => <><Header /><Hero /></>;
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
</script>
```

## Caveats

- The wings illustration on the homepage is the actual poster JPG cropped — it includes the full poster (with text). A clean SVG asset of just-the-wings is not in the kit; commission one if you need to recompose.
- The "season selector" is decorative; clicking it doesn't filter.
- All photos belong to the orchestra; do not redistribute outside this design system.
