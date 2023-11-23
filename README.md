# シンプルなブログサイト

microCMS 様の"シンプルなブログのテンプレート"を改変したサイトです。(https://github.com/microcmsio/nextjs-simple-blog-template)

## 変更ポイント

- 記事のサムネイルサイズを大きく
- 標準のフォントを GoogleFonts に[(記事)](https://merusite-iris-fla.vercel.app/articles/next_font)
- 画面遷移時のアニメーション[(記事)](https://merusite-iris-fla.vercel.app/articles/next_animation)
- 見た目の変更等[(記事)]()

## 環境変数の設定

ルート直下に`.env`ファイルを作成し、下記の情報を入力してください。

```
MICROCMS_API_KEY="xxxxxxxxxx"
MICROCMS_SERVICE_DOMAIN="xxxxxxxxxx"
BASE_URL="xxxxxxxxxx"
```

`MICROCMS_API_KEY`
microCMS 管理画面の「サービス設定 > API キー」から確認することができます。

`MICROCMS_SERVICE_DOMAIN`
microCMS 管理画面の URL（https://xxxxxxxx.microcms.io）の xxxxxxxx の部分です。

`BASE_URL`
デプロイ先の URL です。プロトコルから記載してください。

例）
開発環境 → http://localhost:3000
本番環境 → https://xxxxxxxx.vercel.app/ など

## 開発の仕方

1. パッケージのインストール

```bash
npm install
```

2. 開発環境の起動

```bash
npm run dev
```
