import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.css';
import { ChevronRight } from 'lucide-react';
import { Fragment } from 'react';

type BreadcrumbProps = {
  items: { href: string; title: string }[];
};

export const Breadcrumb = (props: BreadcrumbProps) => {
  const { items } = props;

  return (
    <div className={styles.breadcrumb}>
      {items.map((item, i) => (
        <Fragment key={item.title}>
          <Link to={item.href}>{item.title}</Link>
          {i !== items.length - 1 && <ChevronRight className={styles.breadcrumbIcon} size={18} />}
        </Fragment>
      ))}
    </div>
  );
};
