import { TextInput } from '@/components/base/input/TextInput';
import { Column, Table } from '@/components/case/table/Table';
import { HomeHeader } from '@/components/common/home-header/home-header';
import { APP_API_URL } from '@/libs/constants';
import { SuccessResponse } from '@olienttech/model';
import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './ProductListPage.module.css';
import { FlexibleContainer } from '@/components/case/container/flexible-container';
import ActionButton from '@/components/base/button/action-button/action-button';
import { Check } from 'lucide-react';

type HandleProduct = {
  id: string;
  name: string;
  description: string;
  categories: { id: string; name: string }[];
  image: string;
  stock: number;
};

type GetHandleProductResponse = HandleProduct[];

const fetchHandleProducts = async (id: string, token: string) => {
  const res = await fetch(`${APP_API_URL}/manufacturers/${id}/handling-products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const json = (await res.json()) as SuccessResponse<GetHandleProductResponse>;
  return json.data;
};

const updateProductStock = async (id: string, productId: string, token: string, stock: number) => {
  await fetch(`${APP_API_URL}/manufacturers/${id}/handling-products/${productId}/stock`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      stock,
    }),
  });
};

const useHandleProducts = () => {
  const id = 'a5b5da89-b124-4c6f-8937-f308fed6c577';
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE1YjVkYTg5LWIxMjQtNGM2Zi04OTM3LWYzMDhmZWQ2YzU3NyIsInJvbGUiOiJtYW51ZmFjdHVyZXIifQ.wEGQL5Ra8Eo8g4Dr6NZX4Dg-C98e9h9hsEW0qB6MfQU';

  const [products, setProducts] = useState<HandleProduct[]>([]);

  useEffect(() => {
    void fetchHandleProducts(id, token).then((products) => {
      setProducts(products);
    });
  }, []);

  const mutateUpdateStock = useCallback(async (productId: string, stock: number) => {
    await updateProductStock(id, productId, token, stock);
  }, []);

  return { products, mutateUpdateStock };
};

export const ProductListPage = () => {
  const targetProductId = useRef<string | null>(null);

  const { products, mutateUpdateStock } = useHandleProducts();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const productId = targetProductId.current;
    if (productId == null) {
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    const stock = formData.get(`stock_${productId}`);
    console.log(productId, stock);

    if (typeof stock === 'string') {
      void mutateUpdateStock(productId, Number(stock));

      // TODO: 処理が終わった後にtoastを出す
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    // NOTE: Enterキーが押された場合、フォームの送信を防止する
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const columns: Column<HandleProduct>[] = [
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
      header: '在庫',
      accessor: (item) => (
        <div className={styles.stockCell}>
          <TextInput
            type='number'
            min={0}
            data-id={item.id}
            name={`stock_${item.id}`}
            className={styles.stockInput}
            defaultValue={item.stock}
            required
          />
          <ActionButton variant='outlined' onClick={() => (targetProductId.current = item.id)}>
            <Check />
          </ActionButton>
        </div>
      ),
    },
  ];

  return (
    <>
      <HomeHeader />
      <FlexibleContainer>
        <form className={styles.main} onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
          <Table columns={columns} data={products} />
        </form>
      </FlexibleContainer>
    </>
  );
};
