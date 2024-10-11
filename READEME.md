# template-vite

## フロント開発
```txt
├── public  # ドキュメントルート
└── src     # コンパイル前ソース
```

### ファイル構成
fix me


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
グローバルに`npm-check-updates`のインストール
```
ncu
```
アップデートできるライブラリとアップデートされるバージョンの一覧を確認
```
ncu -u
```
コマンドを実行 (`package.json`のバージョンが更新される)
```
rm -rf node_modules
```
node_modulesを削除
```
npm install
```
更新された`package.json`に合わせた新しいバージョンがインストールされる


## GitHub Pages

[publicディレクトリ](https://konno1614.github.io/template-vite/public/)
