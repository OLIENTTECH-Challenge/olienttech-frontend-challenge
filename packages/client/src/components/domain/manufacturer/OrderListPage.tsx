import { Order } from '@/api/model';
import { useAuthLoaderData } from '@/hooks/useAuthLoaderData';
import { useState, useEffect } from 'react';
import * as manufacturerApi from '@/api/manufacturer';
import { Column, Table } from '@/components/case/Table';
import { useNavigate } from 'react-router-dom';

const useOrder = () => {
  const loaderData = useAuthLoaderData();
  const manufacturerId = loaderData.id;
  const token = loaderData.token;

  const [orders, setOrders] = useState<Order[]>([]);

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

  const columns: Column<Order>[] = [
    {
      header: '発注書ID',
      accessor: (item) => item.id,
    },
    {
      header: '発注元',
      accessor: (item) => item.shop.name,
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
