import React from 'react';
import Table from '@/components/base/table/table';
import FilledButton from '@/components/base/button/outlined-button/outlined-button';

type StockItem = {
  id: string;
  name: string;
  category: string;
  stock: number;
};

type StockTableProps = {
  data: StockItem[];
};

const StockTable: React.FC<StockTableProps> = ({ data }) => {
  // 3秒待機してからalertを表示する
  const handleClick = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    alert('入庫しました');
  };

  const columns = [
    {
      header: '',
      accessor: () => (
        <div>
          <FilledButton color={'#4CAF50'} label='＋入庫' loadingLabel='入庫中...' onClick={handleClick} />
          <FilledButton color={'#FF9130'} label='− 出庫' loadingLabel='出庫中...' onClick={handleClick} />
        </div>
      ),
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
      header: '在庫数',
      accessor: (item: StockItem) => item.stock,
    },
  ];

  return <Table columns={columns} data={data} />;
};

export default StockTable;
