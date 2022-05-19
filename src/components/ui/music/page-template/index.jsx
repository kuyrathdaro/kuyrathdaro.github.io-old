import styles from "./index.module.css";

const PageTemplate = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default PageTemplate;
