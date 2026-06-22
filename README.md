# 論文解説ノート（ローカル静的サイト）

ビルド不要。`index.html` をブラウザで直接開くだけ（`file://` で動作）。

## 構成

```
paper_site/
├── index.html            一覧ページ（papers.js からカードを自動生成）
├── assets/
│   ├── style.css         共通スタイル（ライト/ダーク自動）
│   ├── papers.js         論文レジストリ ← 論文追加時はここに1行
│   ├── site.js           一覧描画 + モード切替ロジック
│   └── img/
│       └── <id>/         論文ごとの図画像（例: img/hint/fig1_teaser.png）
├── papers/
│   └── hint/index.html   各論文ページ（解説/逐語訳をモード切替）
└── templates/
    └── paper_template.html  新規論文ページの雛形
```

## 論文を追加する手順

1. `templates/paper_template.html` を `papers/<id>/index.html` にコピー
2. `assets/papers.js` の `PAPERS` 配列に同じ `id` でエントリを追加
3. ページ内のメタ情報・本文を埋める
4. 完成したら `papers.js` の `status` を `"draft"` → `"ready"` に変更
   （`ready` で初めて一覧からリンクが有効になる）

## モード切替

各論文ページ上部のセグメントで「📝 解説 / 📖 逐語訳」を切替。
選択状態は `localStorage` に保存され、ページ間で引き継がれる。

- **解説**: 授業資料のように噛み砕いた説明（`.note` で要点囲み、図は `figure`）
- **逐語訳**: 節ごとに原文 `.src` と和訳 `.dst` を対で並べる。図は参照箇所の直後に `figure.tr-fig`（横長は `figure.tr-fig.wide`）で挿入する

## 図の追加

論文PDFからの図の切り出しは `pdf-figure-extract` スキルの手順に従う。

- 画像は **論文ごとに `assets/img/<id>/`** へ置く（例: `assets/img/hint/fig5_qualitative.png`）。
- 解説・逐語訳で同じ画像を使い回してよい（パスは `../../assets/img/<id>/...`）。
- 引用リンクの緑枠など注釈が描画される表は、`gs -sDEVICE=pdfwrite -dShowAnnots=false` で注釈を消したPDFから切り出すと綺麗。
