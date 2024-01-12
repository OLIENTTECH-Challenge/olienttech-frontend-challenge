import { Container } from '@/components/case/Container';
import { HomeHeader } from '@/components/common/HomeHeader';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

export const ShopLayout = () => {
  return (
    <>
      <HomeHeader />
      <Container>
        <div className={styles.container}>
          <Outlet />
        </div>
      </Container>
    </>
  );
};
