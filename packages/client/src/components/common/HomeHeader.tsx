import { Header } from '@/components/base/Header';
import { Image } from '@/components/base/Image';
import { Link } from 'react-router-dom';

export const HomeHeader = () => {
  return (
    <Header
      left={
        <Link to='/'>
          <Image src='/olientgx-logo.jpg' alt='Logo of OLIENTTECH' />
        </Link>
      }
    />
  );
};
