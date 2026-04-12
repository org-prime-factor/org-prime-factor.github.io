# shahed.dev — Portfolio + Blog

Built with **Astro** · **MDX** · **Tailwind CSS** · **React Islands** · **Framer Motion**  
Deployed to **GitHub Pages** with a custom domain.

---

## Local dev

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321)

---

## Writing a blog post

Create a new `.mdx` file in `src/content/blog/`:

```
src/content/blog/my-post-slug.mdx
```

Add frontmatter at the top:

```mdx
---
title: "Your post title"
description: "One-line description shown in listings and SEO"
date: 2025-04-10
tags: [React, TypeScript]   # first tag shows as badge
readTime: "5 min read"
draft: false                # set true to hide from listing
---

Your content here in Markdown or MDX.
```

Push to `main` → GitHub Action builds and deploys automatically (~60–90s).

---

## Writing MDX

You can use standard Markdown + HTML + React components inside `.mdx` files.

Code blocks get syntax highlighting via Shiki (github-dark theme):

````mdx
```ts
const foo = 'bar';
```
````

---

## Deploying

GitHub Actions handles it on every push to `main`. No manual steps.

To set up GitHub Pages:
1. Go to repo **Settings → Pages**
2. Set source to **GitHub Actions**
3. Done — the workflow handles the rest

---

## Custom domain (shahed.dev)

The `public/CNAME` file is already set to `shahed.dev`.

In your DNS registrar, add these A records pointing to GitHub Pages IPs:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

And a CNAME record:
```
www → yourusername.github.io
```

GitHub will auto-provision HTTPS via Let's Encrypt within a few minutes.
