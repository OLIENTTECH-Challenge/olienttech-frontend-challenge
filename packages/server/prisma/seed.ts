import { PrismaClient } from '@prisma/client';

const products = [
  { name: 'アレジオン', description: '強力な抗ヒスタミン作用で鼻炎症状を和らげる薬', categories: ['薬', '花粉症対策'] },
  {
    name: 'リポビタンD',
    description: 'ビタミンB群とタウリンを配合したエネルギードリンク',
    categories: ['健康食品', 'エネルギードリンク'],
  },
  { name: 'ハンドソープ', description: '肌に優しく、効果的に手を清潔にするソープ', categories: ['日用品', '衛生用品'] },
  { name: 'マスク', description: 'ウイルスや花粉から保護する使い捨てマスク', categories: ['日用品', '衛生用品'] },
  {
    name: 'バンドエイド',
    description: '傷口を保護し、治癒を促進する使い捨て絆創膏',
    categories: ['日用品', '医療用品'],
  },
  { name: 'アイボン', description: '目の疲れや充血を和らげる目薬', categories: ['薬', '目薬'] },
  { name: 'ヴェポラップ', description: '風邪の症状を和らげる塗り薬', categories: ['薬', '風邪薬'] },
  { name: 'ムヒ', description: 'かゆみを和らげる外用薬', categories: ['薬', '皮膚用薬'] },
  { name: 'パブロン', description: '風邪の症状を緩和する内服薬', categories: ['薬', '風邪薬'] },
  { name: 'ブルーレット', description: '口内炎やのどの痛みを和らげるスプレー', categories: ['薬', '口腔ケア'] },
  { name: 'ヘパリーゼB', description: '肝機能を改善する薬', categories: ['薬', '健康食品'] },
  { name: 'コンタック', description: '風邪の症状を一度に緩和する薬', categories: ['薬', '風邪薬'] },
  { name: 'サロンパス', description: '筋肉痛や関節痛を和らげる貼り薬', categories: ['薬', '痛み止め'] },
  { name: 'ベビーパウダー', description: '赤ちゃんの肌を保護するパウダー', categories: ['日用品', 'ベビーケア'] },
  { name: 'ベビーオイル', description: '赤ちゃんの肌を保湿するオイル', categories: ['日用品', 'ベビーケア'] },
  { name: 'ベビーソープ', description: '赤ちゃんの肌に優しいソープ', categories: ['日用品', 'ベビーケア'] },
  { name: 'ベビーローション', description: '赤ちゃんの肌を保湿するローション', categories: ['日用品', 'ベビーケア'] },
  {
    name: 'ベビーシャンプー',
    description: '赤ちゃんの髪と頭皮に優しいシャンプー',
    categories: ['日用品', 'ベビーケア'],
  },
  {
    name: 'ベビーワイプ',
    description: '赤ちゃんのおむつ替え時に便利なウェットティッシュ',
    categories: ['日用品', 'ベビーケア'],
  },
  { name: 'ベビーミルク', description: '栄養バランスを考えた赤ちゃん向けのミルク', categories: ['食品', 'ベビーケア'] },
  {
    name: 'ベビーフード',
    description: '離乳食から食事への移行期に適したベビーフード',
    categories: ['食品', 'ベビーケア'],
  },
  {
    name: 'ベビービスケット',
    description: '歯固めやおやつに適したベビービスケット',
    categories: ['食品', 'ベビーケア'],
  },
];

const manufacturers = [
  {
    name: 'オリエントテック製薬',
    description: '最強の薬物を開発しています',
  },
  {
    name: 'オリエントテック飲料',
    description: '最高にキマる飲料水を数多く取り揃えています',
  },
  {
    name: 'サンライズ製薬',
    description: '健康と美容のための製品を提供しています',
  },
  {
    name: 'ムーンライト飲料',
    description: '自然由来の成分を使用した飲料を製造しています',
  },
  {
    name: 'スターダスト製薬',
    description: '革新的な医薬品を開発しています',
  },
  {
    name: 'ギャラクシー飲料',
    description: 'エネルギー補給に最適な飲料を提供しています',
  },
  {
    name: 'コスモス製薬',
    description: '信頼性と効果を兼ね備えた製品を提供しています',
  },
  {
    name: 'プラネット飲料',
    description: '健康志向の消費者向けに高品質な飲料を製造しています',
  },
  {
    name: 'ユニバース製薬',
    description: '最新の科学技術を活用した医薬品を開発しています',
  },
  {
    name: 'ソーラーシステム飲料',
    description: '美味しくて栄養価の高い飲料を提供しています',
  },
  {
    name: 'ミルキーウェイ製薬',
    description: '人々の健康と幸せを追求する製品を開発しています',
  },
  {
    name: 'アンドロメダ飲料',
    description: '体に優しい自然素材の飲料を製造しています',
  },
  {
    name: 'ネビュラ製薬',
    description: '独自の研究に基づいた効果的な医薬品を提供しています',
  },
  {
    name: 'スペースタイム飲料',
    description: '一日の活力をサポートする飲料を提供しています',
  },
  {
    name: 'ブラックホール製薬',
    description: '安全性と効果を重視した医薬品を開発しています',
  },
  {
    name: 'ホワイトホール飲料',
    description: '健康と美味しさを追求した飲料を製造しています',
  },
  {
    name: 'スーパーノヴァ製薬',
    description: '人々の生活を改善するための新しい医薬品を開発しています',
  },
  {
    name: 'クォーサー飲料',
    description: 'エネルギーと栄養を提供する飲料を製造しています',
  },
  {
    name: 'ギャラクシークラスター製薬',
    description: '高品質な医薬品を提供しています',
  },
  {
    name: 'スターフィールド飲料',
    description: '全ての人々が楽しめる美味しい飲料を提供しています',
  },
];

const shops = [
  {
    name: 'ヘルスケアストア',
    description: 'あなたの健康をサポートする製品を豊富に取り揃えています',
  },
  {
    name: 'ビタミンショップ',
    description: 'ビタミン製品を中心に、健康食品を提供しています',
  },
  {
    name: 'ナチュラルドラッグ',
    description: '自然由来の成分を使用した製品を多数取り扱っています',
  },
  {
    name: 'ファミリードラッグ',
    description: '家族全員の健康を考えた製品を提供しています',
  },
  {
    name: 'エクスプレスファーマシー',
    description: '忙しいあなたのための便利なドラッグストアです',
  },
  {
    name: 'ウェルネスマーケット',
    description: '健康と美容のための製品を幅広く取り揃えています',
  },
  {
    name: 'ヘルシーライフ',
    description: '健康的な生活をサポートする製品を提供しています',
  },
  {
    name: 'メディカルプラザ',
    description: '医療用品から日用品まで、幅広い製品を取り扱っています',
  },
  {
    name: 'フィットネスドラッグ',
    description: 'フィットネスをサポートする製品を多数取り揃えています',
  },
  {
    name: 'ビューティーファーマシー',
    description: '美容に関する製品を豊富に取り揃えています',
  },
];

const nonNullable = <T>(value: T): value is NonNullable<T> => value != null;

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

const prisma = new PrismaClient();
async function main() {
  // 商品カテゴリマスタ
  const productCategories = Array.from(new Set(products.flatMap((p) => p.categories))).map((v) => ({ name: v }));
  const _productCategories = await prisma.$transaction(
    async (tx) =>
      await Promise.all(
        productCategories.map(
          async ({ ...v }) =>
            await tx.productCategory.create({
              data: v,
            }),
        ),
      ),
  );

  // 商品マスタ
  const _products = await prisma.$transaction(
    async (tx) =>
      await Promise.all(
        products.map(async ({ categories, ...v }) => {
          const categoryIds = categories
            .map((c) => _productCategories.find((_c) => _c.name === c)?.id ?? null)
            .filter(nonNullable);

          const product = await tx.product.create({
            data: {
              ...v,
              categories: {
                create: categoryIds.map((id) => ({
                  categoryId: id,
                })),
              },
            },
          });

          return product;
        }),
      ),
  );

  // メーカーマスタ
  const _manufacturers = await prisma.$transaction(
    async (tx) =>
      await Promise.all(
        manufacturers.map(
          async ({ ...v }) =>
            await tx.manufacturer.create({
              data: {
                ...v,
                handlingProducts: {
                  // NOTE: 仮で全商品を登録
                  create: _products.map(({ id }) => ({
                    productId: id,
                    stock: getRandomInt(100),
                  })),
                },
              },
            }),
        ),
      ),
  );

  // 店舗マスタ
  await prisma.$transaction(
    async (tx) =>
      await Promise.all(
        shops.map(
          async ({ ...v }) =>
            await tx.shop.create({
              data: {
                ...v,
                partnerManufacturers: {
                  // NOTE: 仮で全メーカーを登録
                  create: _manufacturers.map(({ id }) => ({
                    manufacturerId: id,
                  })),
                },
              },
            }),
        ),
      ),
  );
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
