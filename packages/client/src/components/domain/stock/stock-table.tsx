import { Table } from '@/components/base/table/table';
import { OutlinedButton } from '@/components/base/button/outlined-button/outlined-button';
import { ManufacturerHandlingProduct } from '@olienttech/model';

type StockTableProps = {
  data: ManufacturerHandlingProduct[];
};

export const StockTable = ({ data }: StockTableProps) => {
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
          <OutlinedButton color={'#4CAF50'} label='＋入庫' loadingLabel='入庫中...' onClick={handleClick} />
          <OutlinedButton color={'#FF9130'} label='− 出庫' loadingLabel='出庫中...' onClick={handleClick} />
        </div>
      ),
    },
    {
      header: '商品ID',
      accessor: (item: ManufacturerHandlingProduct) => item.product.id,
    },
    {
      header: '商品名',
      accessor: (item: ManufacturerHandlingProduct) => item.product.name,
    },
    {
      header: 'カテゴリ',
      accessor: (item: ManufacturerHandlingProduct) =>
        item.product.categories.map((category) => category.name).join('、'),
    },
    {
      header: '在庫数',
      accessor: (item: ManufacturerHandlingProduct) => item.stock,
    },
  ];

  return <Table columns={columns} data={data} />;
};
