import { useAuthLoaderData } from '@/hooks/useAuthLoaderData';
import { useState, useEffect } from 'react';
import * as manufacturerApi from '@/api/manufacturer';
import { Column, Table } from '@/components/case/Table';
import { useParams } from 'react-router-dom';
import styles from './OrderPage.module.css';

type Response = Awaited<ReturnType<typeof manufacturerApi.fetchOrder>>;

const useOrder = (orderId: string) => {
  const loaderData = useAuthLoaderData();
  const manufacturerId = loaderData.id;
  const token = loaderData.token;

  const [order, setOrders] = useState<Response | null>(null);

  useEffect(() => {
    void manufacturerApi.fetchOrder({ manufacturerId, orderId, token }).then((orders) => {
      setOrders(orders);
    });
  }, [manufacturerId, orderId, token]);

  return { order };
};

export const OrderPage = () => {
  const params = useParams();
  const orderId = params['orderId'];

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { order } = useOrder(orderId!);
  const items = order?.items ?? [];

  const columns: Column<(typeof items)[number]>[] = [
    {
      header: '商品ID',
      accessor: (item) => item.product.id,
    },
    {
      header: '商品名',
      accessor: (item) => item.product.name,
    },
    {
      header: '商品説明',
      accessor: (item) => item.product.description,
    },
    {
      header: '在庫数',
      accessor: (item) => item.stock,
    },
    {
      header: '発注数',
      accessor: (item) => item.quantity,
    },
    {
      header: '単価',
      accessor: (item) => <p className={styles.priceCell}>{item.price}円</p>,
    },
  ];

  if (order === null) {
    return <p>請求書が見つかりません</p>;
  }

  return (
    <div className={styles.main}>
      <div>
        <p>発注元: {order.shop.name}</p>
        <p>発注日: {order.orderAt}</p>
        <p>発注金額: {order.totalPrice}円</p>
      </div>
      <Table columns={columns} data={items} />
    </div>
  );
};
