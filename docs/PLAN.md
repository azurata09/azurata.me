# ポートフォリオサイト実装計画

## 1. 概要
あずらた（azurata）さんのポートフォリオ Web サイトを構築します。
「シンプルでプロフェッショナル」なデザインを基調とし、学術・実務の両面を効果的に伝えます。

## 2. 技術スタック
- **Framework**: Astro (v5.x)
- **Styling**: Tailwind CSS (npx astro add tailwind で導入)
- **Content Management**: Astro Content Collections (YAML/Markdown)
- **Components**: UIコンポーネントライブラリ（必要に応じて）

## 3. コンテンツ構造 (Content Collections)
メンテナンス性を高めるため、以下のデータを `src/content/` で管理します。

- **Education (学歴)**: `src/content/education/*.yaml`
- **Experience (職歴)**: `src/content/experience/*.yaml`
- **Certifications (資格)**: `src/content/certifications/*.yaml`
- **Presentations (発表)**: `src/content/presentations/*.yaml`
- **Awards (受賞)**: `src/content/awards/*.yaml`
- **Projects (成果物)**: `src/content/projects/*.md` (ダミー3件から開始)

## 4. ページ構成
### メインページ (`/`)
- **Hero**: 氏名、所属、SNS リンク
- **About**: 自己紹介文（提供済みテキスト）
- **Experience & Education**: タイムライン形式での表示
- **Achievements**: 資格、受賞、発表をリスト表示
- **Projects**: カード形式での一覧。クリック時に詳細（モーダルまたは展開）を表示。

## 5. 実装フェーズ

### Phase 1: 環境整備
1. Tailwind CSS の導入 (`npx astro add tailwind`)
2. `src/content/config.ts` の定義とデータ作成

### Phase 2: レイアウト・コンポーネント作成
1. `Layout.astro` (基本構造、フォント設定)
2. セクションコンポーネント (Title, SectionWrapper)
3. タイムラインコンポーネント
4. プロジェクトカードコンポーネント

### Phase 3: コンテンツ実装
1. 各種データの流し込み
2. モーダル（または詳細表示）の実装

### Phase 4: ブラッシュアップ
1. レスポンシブ対応
2. デザインの微調整（シンプル・プロフェッショナル）

---
## 進行状況
- [x] 実装計画の策定
- [ ] Phase 1: 環境整備
- [ ] Phase 2: レイアウト・コンポーネント作成
- [ ] Phase 3: コンテンツ実装
- [ ] Phase 4: ブラッシュアップ
