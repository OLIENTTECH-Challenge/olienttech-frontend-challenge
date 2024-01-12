import styles from './HomePage.module.css';
import { LinkCard } from '@/components/base/LinkCard';
import { Container } from '@/components/case/Container';
import { HomeHeader } from '@/components/common/HomeHeader';

type Reference = {
  title: string;
  description: string;
  href: string;
  external?: boolean;
};

const references: Reference[] = [
  {
    title: 'README',
    description: '環境構築や開発ツールについてはこちらを確認してください',
    href: 'https://github.com/OLIENTTECH/gx-frontend-challenges/blob/main/README.md',
  },
  {
    title: 'What is BCCD Design?',
    description: 'BCCD Designはコンポーネントの意味と性質に基づいて体系的に分類する新しいソフトウェア設計手法です',
    href: 'https://github.com/OLIENTTECH/gx-frontend-challenges/blob/main/docs/bccd-design.md',
    external: true,
  },
];

export const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <Container>
        <main className={styles.main}>
          <div className={styles.intro}>
            <div className={styles.introTitle}>
              <h1>
                OLIENTTECH
                <br />
                Recruitment Challenges
              </h1>
            </div>
            <div className={styles.introSubtitle}>
              <p>
                日本のドラッグストアでは、薬だけでなく日用品や生鮮食品など様々な商品を販売しています。そのためドラッグストアでは、薬メーカーや日用品メーカーなど様々なメーカーから商品を発注しています。今回は、ドラッグストアが様々なメーカーに対して商品を発注することができる発注プラットフォームを開発することになりました。
              </p>
            </div>
            <div className={styles.introStack}>
              <div className={styles.introStackButtons}>
                <LinkCard title='ドラッグストア向けページ' description='薬や日用品などを販売しています' href='/shop' />
                <LinkCard
                  title='メーカー向けページ'
                  description='薬や日用品などを製造しています'
                  href='/manufacturer'
                />
              </div>
            </div>
          </div>
          <div className={styles.reference}>
            <div className={styles.referenceHeading}>
              <h3>Reference</h3>
              <p>参考リンク集</p>
            </div>
            <div className={styles.referenceContents}>
              {references.map((reference, i) => (
                <LinkCard key={i} {...reference} />
              ))}
            </div>
          </div>
        </main>
      </Container>
    </>
  );
};
