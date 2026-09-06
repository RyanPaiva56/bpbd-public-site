# Blueprints By Design

Static public site for [bpbd.us](https://bpbd.us). Built with [Eleventy](https://www.11ty.dev/) and [Tailwind CSS](https://tailwindcss.com/), deployed to GitHub Pages.

## Local preview

```bash
npm install
npm start
```

Open http://localhost:8080/

```bash
npm run build
```

compiles Tailwind (`src/css/input.css` → `src/assets/css/style.css`) then writes HTML to `_site/`.

## GitHub Pages

After the first push to `main`:

1. Repo **Settings → Pages**
2. Source: **GitHub Actions**
3. Custom domain: `bpbd.us`
4. Check **Enforce HTTPS** (after DNS resolves)

## DNS at the bpbd.us registrar

Point the domain at GitHub Pages:

| Host | Type | Value |
|------|------|--------|
| `@` (apex) | A | `185.199.108.153` |
| `@` | A | `185.199.109.153` |
| `@` | A | `185.199.110.153` |
| `@` | A | `185.199.111.153` |
| `www` | CNAME | `ryanpaiva56.github.io` |

Do not use the `https://ryanpaiva56.github.io/bpbd-public-site/` project URL as the public site. Paths assume the custom domain at the root.

## Analytics

GA4 Measurement ID `G-0XPH11SMRK` (property `397052628`) is in `src/_data/site.json`.

## Edit content

- Copy and pages: `src/*.md` and `src/**/*.md`
- Hours, phone, email: `src/_data/site.json`
- Navigation: `src/_data/nav.json`
- Reviews list: `src/_data/reviews.json`
