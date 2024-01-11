import styles from './LoginPage.module.css';
import ActionButton from '@/components/base/button/action-button/action-button';
import { TextInput } from '@/components/base/input/TextInput';
import { HomeHeader } from '@/components/common/home-header/home-header';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as manufacturerApi from '@/api/manufacturer';

export const ManufacturerLoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const id = formData.get('id');
    const password = formData.get('password');

    if (typeof id === 'string' && typeof password === 'string') {
      void toast
        .promise(manufacturerApi.signin({ id, password }), {
          loading: 'ログイン中です',
          success: (user) => `${user.name}でログインしました`,
          error: 'ログインに失敗しました',
        })
        .then(() => {
          navigate('/manufacturer/products');
        });
    } else {
      toast.error('エラーが発生しました');
    }
  };

  return (
    <>
      <HomeHeader />
      <div className={styles.main}>
        <form method='post' className={styles.form} onSubmit={handleSubmit}>
          <TextInput name='id' type='text' placeholder='製造会社ID' />
          <TextInput name='password' type='password' placeholder='パスワード' />
          <ActionButton variant='filled'>ログイン</ActionButton>
        </form>
      </div>
    </>
  );
};
