import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h2 className={"text-center text-3xl font-bold align-bottom pb-4"}>
        📈 HIGHCHART CHALLENGE
      </h2>
    </div>
  );
};

export default Header;
