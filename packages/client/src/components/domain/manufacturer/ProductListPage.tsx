import { TextInput } from '@/components/base/TextInput';
import { Column, Table } from '@/components/case/Table';
import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './ProductListPage.module.css';
import { Check } from 'lucide-react';
import toast from 'react-hot-toast';
import * as manufacturerApi from '@/api/manufacturer';
import { useAuthLoaderData } from '@/hooks/useAuthLoaderData';
import { Button } from '@/components/base/Button';

type Response = Awaited<ReturnType<typeof manufacturerApi.fetchHandlingProducts>>;

const useHandleProducts = () => {
  const loaderData = useAuthLoaderData();
  const manufacturerId = loaderData.id;
  const token = loaderData.token;

  const [products, setProducts] = useState<Response>([]);

  useEffect(() => {
    void manufacturerApi.fetchHandlingProducts({ manufacturerId, token }).then((products) => {
      setProducts(products);
    });
  }, [manufacturerId, token]);

  const mutateUpdateStock = useCallback(
    async (productId: string, stock: number) => {
      await manufacturerApi.updateHandlingProductStock({ manufacturerId, productId, token, stock });
    },
    [manufacturerId, token],
  );

  return { products, mutateUpdateStock };
};

export const ProductListPage = () => {
  const targetProductId = useRef<string | null>(null);

  const { products, mutateUpdateStock } = useHandleProducts();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const productId = targetProductId.current;
    if (productId == null) {
      toast.error('商品IDが存在しません');
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    const stock = formData.get(`stock_${productId}`);

    const product = products.find((product) => product.id === productId) ?? null;
    if (product === null) {
      toast.error('対象の商品が存在しません');
      return;
    }

    if (typeof stock !== 'string') {
      toast.error('在庫数は数値で入力してください');
      return;
    }

    void toast.promise(mutateUpdateStock(productId, Number(stock)), {
      loading: `${product.name}の在庫数を更新中です`,
      success: `${product.name}の在庫数を更新しました`,
      error: `${product.name}の在庫数の更新に失敗しました`,
    });
    return;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    // NOTE: Enterキーが押された場合、フォームの送信を防止する
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const columns: Column<Response[number]>[] = [
    {
      header: 'ID',
      accessor: (item) => item.id,
    },
    {
      header: '商品名',
      accessor: (item) => item.name,
    },
    {
      header: '商品説明',
      accessor: (item) => item.description,
    },
    {
      header: '商品カテゴリ',
      accessor: (item) => item.categories.map((category) => category.name).join('・'),
    },
    {
      header: '単価',
      accessor: (item) => <p className={styles.priceCell}>{`${item.price}円`}</p>,
    },
    {
      header: '在庫',
      accessor: (item) => (
        <div className={styles.stockCell}>
          <TextInput
            type='number'
            min={0}
            name={`stock_${item.id}`}
            className={styles.stockInput}
            defaultValue={item.stock}
            required
          />
          <Button variant='outlined' onClick={() => (targetProductId.current = item.id)}>
            <Check />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
      <Table columns={columns} data={products} />
    </form>
  );
};
