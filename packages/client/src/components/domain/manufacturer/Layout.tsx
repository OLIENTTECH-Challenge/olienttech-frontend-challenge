import { Container } from '@/components/case/Container';
import { HomeHeader } from '@/components/common/HomeHeader';
import { Outlet, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';
import { Breadcrumb } from '@/components/case/Breadcrumb';

export const ManufacturerLayout = () => {
  const location = useLocation();
  const isProductPage = location.pathname.includes('products');

  let breadcrumbItems = [{ href: '/manufacturer', title: '製造会社トップ' }];
  if (isProductPage) {
    breadcrumbItems = [...breadcrumbItems, { href: '/manufacturer/products', title: '取り扱い商品一覧' }];
  }

  return (
    <>
      <HomeHeader />
      <Container>
        <div className={styles.container}>
          <Breadcrumb items={breadcrumbItems} />
          <Outlet />
        </div>
      </Container>
    </>
  );
};
