/* =========================================================
   共通スクリプト
   - renderIndex() : 一覧ページで論文カードを描画
   - initPaper()   : 論文ページでモード切替(解説/逐語訳)を初期化
   ========================================================= */

/* ---- 一覧ページ ---- */
function renderIndex() {
  var list = document.getElementById("paper-list");
  if (!list || !window.PAPERS) return;

  window.PAPERS.forEach(function (p) {
    var ready = p.status === "ready";
    var el = document.createElement("a");
    el.className = "card" + (ready ? "" : " placeholder");
    el.href = ready ? p.path : "javascript:void(0)";

    var tags = (p.tags || [])
      .map(function (t) { return '<span class="tag">' + t + "</span>"; })
      .join("");

    el.innerHTML =
      '<div class="card-meta">' + (p.venue || "") + (p.year ? " · " + p.year : "") +
        (ready ? "" : ' · <span class="todo">骨格のみ</span>') + "</div>" +
      "<h2>" + p.title + "</h2>" +
      (p.titleJa ? '<p class="title-ja">' + p.titleJa + "</p>" : "") +
      (p.summary ? '<p class="summary">' + p.summary + "</p>" : "") +
      '<div class="tags">' + tags + "</div>";

    list.appendChild(el);
  });
}

/* ---- 論文ページ: モード切替 ---- */
var MODE_KEY = "paper_site_mode";

function setMode(mode) {
  document.querySelectorAll(".mode-switch button").forEach(function (b) {
    b.setAttribute("aria-selected", b.dataset.mode === mode ? "true" : "false");
  });
  document.querySelectorAll(".mode-pane").forEach(function (pane) {
    pane.classList.toggle("active", pane.dataset.mode === mode);
  });
  try { localStorage.setItem(MODE_KEY, mode); } catch (e) {}
}

function initPaper() {
  var sw = document.querySelector(".mode-switch");
  if (!sw) return;

  var saved = "explain";
  try { saved = localStorage.getItem(MODE_KEY) || "explain"; } catch (e) {}
  // 保存されたモードのペインが無ければ解説にフォールバック
  if (!document.querySelector('.mode-pane[data-mode="' + saved + '"]')) saved = "explain";
  setMode(saved);

  sw.querySelectorAll("button").forEach(function (b) {
    b.addEventListener("click", function () { setMode(b.dataset.mode); });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderIndex();
  initPaper();
});
