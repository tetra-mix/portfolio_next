This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Linting and Formatting

このプロジェクトでは、コードの品質を維持するためにESLintとPrettierを使用しています。

### ESLint

ESLintは、JavaScriptとTypeScriptのコードを静的に解析し、問題を特定するツールです。

コードをリントするには：

```bash
pnpm lint
```

### Prettier

Prettierは、コードフォーマッターで、一貫したコードスタイルを維持します。

主な設定：

- セミコロン: 使用する
- 引用符: シングルクォート
- タブ幅: 2スペース
- 最大行長: 100文字
- 末尾カンマ: ES5準拠

コードを手動でフォーマットするには、以下のコマンドを追加してpackage.jsonのscriptsセクションに記述することができます：

```bash
pnpm format
```

または、VSCodeなどのエディタでPrettier拡張機能を使用して、保存時に自動フォーマットすることもできます。

### VSCodeでの設定

VSCodeでESLintとPrettierを使用するには、以下の拡張機能をインストールすることをお勧めします：

1. ESLint
2. Prettier - Code formatter

そして、`.vscode/settings.json`に以下の設定を追加することで、保存時に自動フォーマットが有効になります：

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
