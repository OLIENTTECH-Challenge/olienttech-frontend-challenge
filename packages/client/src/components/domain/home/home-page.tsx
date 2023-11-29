import styles from './home-page.module.css';
import { LinkButton } from '@/components/base/button/link-button';
import { LinkCard } from '@/components/base/card/link-card';
import { FlexibleContainer } from '@/components/case/container/flexible-container';
import { HomeHeader } from '@/components/common/home-header/home-header';

type Reference = {
  title: string;
  description: string;
  href: string;
  external?: boolean;
};

const references: Reference[] = [
  {
    title: 'What is BCCD Design?',
    description: 'BCCD Designはコンポーネントの意味と性質に基づいて体系的に分類する新しいソフトウェア設計手法です。',
    href: 'https://github.com/OLIENTTECH/gx-frontend-challenges/blob/main/docs/bccd-design.md',
    external: true,
  },
  {
    title: '在庫管理一覧ページ',
    description: '薬局の在庫管理を行うための一覧ページです。',
    href: '/stocks',
  },
  {
    title: 'Hoge?',
    description: 'hogehoge',
    href: '/',
  },
  {
    title: 'Hoge?',
    description: 'hogehoge',
    href: '/',
  },
  {
    title: 'Hoge?',
    description: 'hogehoge',
    href: '/',
  },
];

export const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <FlexibleContainer>
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
                Used by some of the world&apos;s largest companies, Next.js enables you to create full-stack Web
                applications by extending the latest React features, and integrating powerful Rust-based JavaScript
                tooling for the fastest builds.
              </p>
            </div>
            <div className={styles.introStack}>
              <div className={styles.introStackButtons}>
                <LinkButton href='/'>Get Started</LinkButton>
                <LinkButton
                  href='https://github.com/OLIENTTECH/gx-frontend-challenges/blob/main/README.md'
                  variant='outlined'
                >
                  README
                </LinkButton>
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
      </FlexibleContainer>
    </>
  );
};
