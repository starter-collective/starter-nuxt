# Nuxt Starter Template

[![GitHub Release Version](https://img.shields.io/github/v/release/starter-collective/starter-nuxt?label=Release&color=%42b883)](https://github.com/starter-collective/starter-nuxt/releases)
[![Build Status](https://github.com/starter-collective/starter-nuxt/actions/workflows/ci.yml/badge.svg?branch=main&color=%42b883)](https://github.com/starter-collective/starter-nuxt/actions/workflows/ci.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/6b182d34-7d30-4206-aad9-9789d1c8ed11/deploy-status)](https://app.netlify.com/sites/starter-nuxt/deploys)

Nuxt SSR & full-stack starter template, supports I18n, UnoCSS, Prisma, MySQL and provides better SEO.

- [Live Demo](https://starter-nuxt.netlify.app/)
- [Play on Stackblitz](https://stackblitz.com/github/starter-collective/starter-nuxt)

## Features

- [Nuxt](https://nuxt.com/) - SSR, File-based routing, components auto importing, modules, etc.
- Full-stack development with [Prisma](https://www.prisma.io/) and [MySQL](https://www.mysql.com/).
- State Management via [Pinia](https://github.com/vuejs/pinia), see [/app/stores/layout.ts](./app/stores/layout.ts).
- Provide good [SEO](https://nuxt.com/docs/getting-started/seo-meta) for your website with powerful head config, composables and components.
- Use [SVG icons](https://github.com/antfu/unocss/tree/main/packages/preset-icons) from any icon sets in Pure CSS, powered by [UnoCSS](https://github.com/unocss/unocss).
- [I18n](./locales) ready, and supports automatic import of translated files.
- Unit Testing with [Vitest](https://github.com/vitest-dev/vitest).
- Deploy on [Netlify](https://app.netlify.com/) with zero-config, supports other deployment methods as well.

## Usage

[Create a repo](https://github.com/starter-collective/starter-nuxt/generate) from this template on GitHub.

```bash
git clone <git remote url>
```

Install dependencies.

```bash
cd starter-nuxt # Or your project directory

pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

Just run and visit http://localhost:9865.

```bash
pnpm dev
```

To build the App, you can run:

```bash
pnpm build
```

You will then see the `.output` folder generated for publishing, which you can preview locally with the following command.

```bash
pnpm preview
```

## Deployment

Nuxt application can be deployed on a Node.js server, pre-rendered for static hosting, or deployed to serverless or edge (CDN) environments.

[How to deploy?](https://nuxt.com/docs/getting-started/deployment)

## Clean Template

If you prefer to do it manually with the cleaner git history:

```bash
npx degit starter-collective/starter-nuxt starter-nuxt

cd starter-nuxt

pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

When you use this template, try follow the checklist to update your info properly:

- [ ] Change the app title in `i18n/locales/*.json` and `nuxt.config.ts`.
- [ ] Change the favicon and logo icon in `public`.

## License

[MIT License](./LICENSE) © 2024 [Kieran Wang](https://github.com/kieranwv/)
