# Nuxt 3 启动模板

[![Version](https://img.shields.io/github/v/release/starter-collective/starter-nuxt3?style=flat&label=released&color=%230d0d0d)](https://github.com/starter-collective/starter-nuxt3/releases)

Nuxt 3 服务端渲染 (SSR) 和全栈开发启动模板，支持 I18n、UnoCSS、Prisma、MySQL，并提供更好的 SEO 优化。

- [在线演示](https://starter-nuxt3.netlify.app/)
- [在 Stackblitz 上试用](https://stackblitz.com/github/starter-collective/starter-nuxt3)
- [英语的 README](./README.md)

## 特性

- [Nuxt 3](https://nuxt.com/) - SSR、基于文件的路由、组件自动导入、模块等功能。
- 使用 [Prisma](https://www.prisma.io/) 和 [MySQL](https://www.mysql.com/) 进行全栈开发。
- 使用 [Pinia](https://github.com/vuejs/pinia) 进行状态管理，详见 [/app/stores/layout.ts](./app/stores/layout.ts)。
- 通过强大的 head 配置、组合式函数和组件提供优秀的 [SEO](https://nuxt.com/docs/getting-started/seo-meta) 优化。
- 通过 [UnoCSS](https://github.com/unocss/unocss) 使用纯 CSS 的 [SVG 图标](https://github.com/antfu/unocss/tree/main/packages/preset-icons)，支持任意图标集。
- 支持 [I18n](./locales)，并自动导入翻译文件。
- 使用 [Vitest](https://github.com/vitest-dev/vitest) 进行单元测试。
- 零配置部署到 [Netlify](https://app.netlify.com/)，支持其他部署方式。

## 使用方法

从 GitHub 上 [创建一个仓库](https://github.com/starter-collective/starter-nuxt3/generate) 基于此模板。

```bash
git clone <git 远程地址>
```

安装依赖。

```bash
cd starter-nuxt3 # 或者你的项目目录

pnpm i # 如果你没有安装 pnpm，运行：npm install -g pnpm
```

运行项目并访问 http://localhost:9865。

```bash
pnpm dev
```

要构建应用，可以运行：

```bash
pnpm build
```

构建后会生成 `dist` 文件夹，你可以使用以下命令进行本地预览。

```bash
pnpm preview
```

## 清理模板

如果你更喜欢手动操作并保持更清晰的 git 历史记录：

```bash
npx degit starter-collective/starter-nuxt3 starter-nuxt3

cd starter-nuxt3

pnpm i # 如果你没有安装 pnpm，运行：npm install -g pnpm
```

使用此模板时，请按照以下检查列表正确更新信息：

- [ ] 更改 `app/locales/*.json` 和 `nuxt.config.ts` 中的应用标题。
- [ ] 更改 `public` 中的 favicon 和 logo 图标。

## 许可证

[MIT 许可证](./LICENSE) © 2024 [Kieran Wang](https://github.com/kieranwv/)
