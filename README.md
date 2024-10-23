# template-vite

## フロント開発
![VS Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=flat&logo=visualstudiocode&logoColor=ffffff)
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=ffffff)
![Github](https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=ffffff)
![vite](https://img.shields.io/badge/vite-F7C526?style=flat&logo=vite&logoColor=8971EA)
![node.js](https://img.shields.io/badge/Node.js-5FA04E?style=flat&logo=node.js&logoColor=ffffff)
![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=ffffff)


### ファイル構成
```txt
└── Project/
    ├── src/
    │   ├── index.html
    │   ├── hoge/
    │   │   └── index.html
    │   ├── */
    │   │   └── index.html
    │   │   └── */
    │   │       └── index.html
    │   ├── assets/
    │   │   ├── styles/
    │   │   │   │──style.scss
    │   │   │   ├── foundation/
    │   │   │   │   ├── _index.scss
    │   │   │   │   └── _*.scss
    │   │   │   ├── layout/
    │   │   │   │   ├── _index.scss
    │   │   │   │   └── _*.scss
    │   │   │   └── object/
    │   │   │       ├── _index.scss
    │   │   │       ├── component/
    │   │   │       │   └── _*.scss
    │   │   │       ├── pages/
    │   │   │       │   └── _*.scss
    │   │   │       └── utility/
    │   │   │           └── _*.scss
    │   │   └── js/
    │   │       └── *.js
    │   ├── components/
    │   │   └── _*.ejs
    │   └── public/
    │       └── assets/
    │           ├── img/  // png,jpg画像はwebpにbuild時に変換されます
    │           │   ├── hoge1.png
    │           │   ├── hoge2.jpg
    │           │   ├── hoge3.svg
    │           │   └── etc…
    │           ├── css/  // 圧縮したくないstyles（※1）
    │           │   └── not-compressed.css
    │           └── js/  // 圧縮したくないscripts（※2）
    │               └── not-compressed.js
    └── public/
        ├── index.html  // *.png、*.jpgの記述は*.webpに変換
        ├── assets/
        │   ├── css/
        │   │   ├── not-compressed.css  // 圧縮したくないstyles（※1）
        │   │   └── style.css
        │   ├── img/  // *.png,*.jpgは*.webpに変換
        │   │   ├── hoge1.webp
        │   │   ├── hoge2.webp
        │   │   ├── hoge3.svg
        │   │   └── etc…
        │   └── js/
        │       ├── not-compressed.js  // 圧縮したくないscripts（※2）
        │       └── *.js
        └── hoge/
            └── index.html
```

### 推奨 node バーション

```
node.js(version: v22.9.0)
```

### 依存ファイルインストール

```
npm install
```

### 開発開始

```
npm run start
```

### 開発終了

```
npm run build
```

### npmパッケージアップデート
```
npm i -g npm-check-updates
```
▲グローバルに`npm-check-updates`のインストール
```
ncu
```
▲アップデートできるライブラリとアップデートされるバージョンの一覧を確認
```
ncu -u
```
▲コマンドを実行 (`package.json`のバージョンが更新される)
```
rm -rf node_modules
```
▲node_modulesを削除
```
npm install
```
▲更新された`package.json`に合わせた新しいバージョンがインストールされる


## GitHub Pages

[publicディレクトリ](https://konno1614.github.io/template-vite/public/)
