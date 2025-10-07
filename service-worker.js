// 最小限のService Worker（リダイレクト専用）
self.addEventListener('fetch', event => {
  // リダイレクト専用なのでキャッシュ不要
});
