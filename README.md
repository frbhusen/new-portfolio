# Hussein Rajab — Portfolio

Premium, static personal portfolio for Hussein Rajab, Junior Full-Stack Developer & Designer.

## Run

```bash
npm install
npm run dev
```

## Edit content

Content is split per section into an English + Arabic pair: `src/content/en/<section>.json` and `src/content/ar/<section>.json`. Keep both files in sync. The interface switches direction (RTL/LTR) with the language.

### Certificates: `certificates.json`

```json
{
  "eyebrow": "...", "title": "...", "intro": "...",
  "locale": "en-US",
  "categories": [{ "id": "web", "label": "Web Development" }],
  "items": [{
    "id": "unique-slug",
    "title": "Certificate name",
    "issuer": "Issuing organization",
    "image": "/assets/certificates/my-cert.png",
    "issued": "2025-06",
    "description": "Short description.",
    "tags": ["HTML", "CSS"],
    "category": "web",
    "featured": true,
    "url": "https://example.com/credential"
  }]
}
```

- **Add a certificate:** append an object to `items`. Put the image in `public/assets/certificates/` (leave `image` as `""` for a placeholder).
- `category` must match a `categories[].id`. Filter buttons appear only for categories that have entries. Add a new category to `categories` in both languages.
- `issued` is `YYYY-MM`. `featured: true` shows a badge. `url` opens in a new tab.

### Skills: `skills.json`

```json
{
  "eyebrow": "...", "title": "...", "intro": "...",
  "groups": [{ "id": "languages", "title": "Languages",
    "items": [{ "name": "Python", "icon": "python" }, { "name": "Teaching" }] }]
}
```

- **Add a skill:** append `{ "name": "...", "icon": "..." }` to a group's `items`. Add a group by appending to `groups`.
- `icon` is optional. Without one (or with an unknown key) the skill is a text-only badge. Available keys are listed in `src/content/skill-icons.ts`. To support a new logo, import it from `react-icons/si` there and add one line.

Other sections (`projects`, `about`, `labels`, `site` for navigation text, and so on) follow the same folder pattern.

## Replaceable assets

Place future images, project renders, and social preview art in `public/assets/`. The current identity graphic is intentionally CSS-built so it remains sharp and lightweight.