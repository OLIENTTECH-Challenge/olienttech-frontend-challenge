import styles from './Image.module.css';

type ImageProps = {
  src: string;
  alt: string;
};

export const Image = ({ src, alt }: ImageProps) => {
  return <img className={styles.medium} src={src} alt={alt} />;
};
