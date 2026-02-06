# 開発ガイドライン（AGENT.md）

本プロジェクトの主な仕様・実装手順は **docs/plan.md** に記載されています。開発時は plan.md を参照してください。

## 参照ドキュメント

- **plan.md** … 仕様、データ形式、実装手順（Phase 1〜5）、チェックリスト
- **TODO.md** … 実装タスクの進捗管理

## 技術スタック

- React + TypeScript、React Router 7、Vite、pnpm
- Jotai（状態管理）、MUI、Dexie（IndexedDB）、pitchfinder、@tonejs/midi
- Biome（Lint / フォーマット）

## 推奨 MCP

- **Serena**: シンボル検索・参照調査・ファイル構造把握に利用
- **context7**: ライブラリの最新ドキュメント参照（MUI, Dexie, pitchfinder 等）
- **cursor-ide-browser**: ブラウザでの動作確認・デバッグ

## コーディング規約

### 関数定義

- **アロー関数を使用する**: `function` 宣言ではなく `const fn = () => {}` 形式を用いる
- 例: `export const getData = () => { ... }`、`const Component = () => { ... }`
- `export default` するコンポーネント: `const Page = () => { ... }; export default Page`

## ルーティング

- `/` … ホーム
- `/practice` … 練習画面
- `/playback` … 再生画面
