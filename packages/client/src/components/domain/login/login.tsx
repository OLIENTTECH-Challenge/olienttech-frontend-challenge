import styles from './login.module.css';
import { HomeHeader } from '@/components/common/home-header/home-header';
import { TextInput } from '../../base/input/TextInput';
import ActionButton from '../../base/button/action-button/action-button';
import { SuccessResponse } from '@olienttech/model';
import { APP_API_URL } from '@/libs/constants';

const signin = async (id: string, password: string) => {
  const res = await fetch(`${APP_API_URL}/manufacturers/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      password,
    }),
  });
  if (res.ok) {
    const json = (await res.json()) as SuccessResponse<{ token: string }>;
    return json.data.token;
  } else {
    return null;
  }
};

export const LoginPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const id = formData.get('id');
    const password = formData.get('password');

    if (typeof id === 'string' && typeof password === 'string') {
      void signin(id, password).then((token) => {
        console.log(token);
      });
    } else {
      // TODO: アラート表示をいい感じにする
      alert('エラーが発生しました');
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
