import styles from './LoginPage.module.css';
import { TextInput } from '@/components/base/TextInput';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as manufacturerApi from '@/api/manufacturer';
import { Button } from '@/components/base/Button';

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
          navigate('/manufacturer');
        });
    } else {
      toast.error('エラーが発生しました');
    }
  };

  return (
    <div className={styles.main}>
      <form method='post' className={styles.form} onSubmit={handleSubmit}>
        <TextInput name='id' type='text' placeholder='製造会社ID' required />
        <TextInput name='password' type='password' placeholder='パスワード' required />
        <Button variant='filled'>ログイン</Button>
      </form>
    </div>
  );
};
