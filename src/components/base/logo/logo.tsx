import styles from "./logo.module.css";

type LogoProps = {
  src: string;
  alt: string;
};

export const Logo = ({ src, alt }: LogoProps) => {
  return <img className={styles.medium} src={src} alt={alt} />;
};
