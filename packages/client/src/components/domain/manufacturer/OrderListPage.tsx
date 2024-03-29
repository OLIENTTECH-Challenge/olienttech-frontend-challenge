import * as manufacturerApi from '@/api/manufacturer';
import { type Column, Table } from '@/components/case/Table';
import { useAuthLoaderData } from '@/hooks/useAuthLoaderData';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './OrderListPage.module.css';

type Response = Awaited<ReturnType<typeof manufacturerApi.fetchOrders>>;

const useOrder = () => {
  const loaderData = useAuthLoaderData();
  const manufacturerId = loaderData.id;
  const token = loaderData.token;

  const [orders, setOrders] = useState<Response>([]);

  useEffect(() => {
    void manufacturerApi.fetchOrders({ manufacturerId, token }).then((products) => {
      setOrders(products);
    });
  }, [manufacturerId, token]);

  return { orders };
};

export const OrderListPage = () => {
  const navigate = useNavigate();
  const { orders } = useOrder();

  const columns: Column<Response[number]>[] = [
    {
      header: '発注書ID',
      accessor: (item) => item.id,
    },
    {
      header: '発注元',
      accessor: (item) => item.shop.name,
    },
    {
      header: '発注金額',
      accessor: (item) => <p className={styles.priceCell}>{item.totalPrice}円</p>,
    },
    {
      header: '発注日',
      accessor: (item) => item.orderAt,
    },
  ];

  return (
    <Table
      columns={columns}
      data={orders}
      onClick={(item) => {
        navigate(`/manufacturer/orders/${item.id}`);
      }}
    />
  );
};
