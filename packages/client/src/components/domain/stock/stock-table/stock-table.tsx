import React from 'react';
import Table from '@/components/base/table/table';

type StockItem = {
  id: string;
  name: string;
  category: string;
  manufacturer: string;
  stock: number;
  orderQuantity: number;
  postShipmentStock: number;
};

type StockTableProps = {
  data: StockItem[];
};

const StockTable: React.FC<StockTableProps> = ({ data }) => {
  const columns = [
    {
      header: '入庫ボタン',
      accessor: () => <button>入庫</button>,
    },
    {
      header: '商品ID',
      accessor: (item: StockItem) => item.id,
    },
    {
      header: '商品名',
      accessor: (item: StockItem) => item.name,
    },
    {
      header: 'カテゴリ',
      accessor: (item: StockItem) => item.category,
    },
    {
      header: 'メーカー',
      accessor: (item: StockItem) => item.manufacturer,
    },
    {
      header: '在庫数',
      accessor: (item: StockItem) => item.stock,
    },
    {
      header: '発注数',
      accessor: (item: StockItem) => item.orderQuantity,
    },
    {
      header: '発注後在庫数',
      accessor: (item: StockItem) => item.postShipmentStock,
    },
  ];

  return <Table columns={columns} data={data} />;
};

export default StockTable;
