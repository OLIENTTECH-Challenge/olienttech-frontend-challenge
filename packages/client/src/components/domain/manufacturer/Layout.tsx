import { Container } from '@/components/case/Container';
import { HomeHeader } from '@/components/common/HomeHeader';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import styles from './Layout.module.css';
import { Breadcrumb } from '@/components/case/Breadcrumb';

export const ManufacturerLayout = () => {
  const params = useParams();
  const orderId = params['orderId'];

  const location = useLocation();
  const isLoginPage = location.pathname.includes('login');
  const isProductListPage = location.pathname.includes('products');
  const isOrderListPage = location.pathname.includes('orders');
  const isOrderPage = !!orderId;

  let breadcrumbItems = [{ href: '/manufacturer', title: '製造会社トップ' }];
  if (isProductListPage) {
    breadcrumbItems = [...breadcrumbItems, { href: '/manufacturer/products', title: '取り扱い商品一覧' }];
  }
  if (isOrderListPage) {
    breadcrumbItems = [...breadcrumbItems, { href: '/manufacturer/orders', title: '発注書一覧' }];
  }
  if (isOrderPage) {
    breadcrumbItems = [...breadcrumbItems, { href: location.pathname, title: orderId }];
  }
  if (isLoginPage) {
    breadcrumbItems = [];
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
