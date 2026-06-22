/* =========================================================
   論文レジストリ
   新しい論文を追加するときは、この配列に1エントリ足すだけ。
   - id      : papers/<id>/ のフォルダ名と一致させる
   - status  : "ready"（解説あり） | "draft"（骨格のみ）
   ========================================================= */
window.PAPERS = [
  {
    id: "hint",
    title: "HINT: Hierarchical Interaction Modeling for Autoregressive Multi-Human Motion Generation",
    titleJa: "HINT: 自己回帰的な複数人モーション生成のための階層的インタラクションモデリング",
    authors: "Mengge Liu, Yan Di, Gu Wang, Yun Qu, Dekai Zhu, Yanyan Li, Xiangyang Ji",
    venue: "arXiv:2601.20383v1 [cs.CV]",
    year: "2026",
    tags: ["motion generation", "multi-human", "autoregressive", "diffusion"],
    summary:
      "テキスト駆動の複数人モーション生成を「自己回帰 × 拡散」で解く初の枠組み。正準化潜在空間でモーションと相互作用を分離し、スライディングウィンドウで長尺・可変長・可変人数の生成を可能にする。",
    path: "papers/hint/index.html",
    status: "ready"
  }
  ,{
    id: "intermask",
    title: "InterMask: 3D Human Interaction Generation via Collaborative Masked Modeling",
    titleJa: "InterMask: 協調的マスク予測による3D人間どうしの相互作用生成",
    authors: "Muhammad Gohar Javed, Chuan Guo, Li Cheng, Xingyu Li",
    venue: "ICLR 2025 (arXiv:2410.10010v3)",
    year: "2025",
    tags: ["motion generation", "two-person interaction", "VQ-VAE", "masked modeling"],
    summary:
      "テキストから二人の3D相互作用を生成する枠組み。各人のモーションを「時間×空間」の2Dトークン地図にVQ符号化し、両者のトークンをマスク予測で協調的に埋める。Self/時空間/Cross-Attentionで人内・人間の依存を捉え、InterHuman/InterXでSOTA。微調整なしでリアクション生成も可能。",
    path: "papers/intermask/index.html",
    status: "ready"
  }
];
