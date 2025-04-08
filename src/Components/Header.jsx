import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Dog from "../Assets/dogs.svg?react";
import { UserContext } from "../UserContext";

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dog />
        </Link>
        {data ? (
          <Link className={styles.login} to="/account">
            {data.nome}
            <button onClick={userLogout}>Logout</button>
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            LogIn / SignIn
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
