import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext.jsx";
import Error from "../Helper/Error.jsx";
import styles from "./LoginForm.module.css";
import stylesBtn from "../Forms/Button.module.css";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="User" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Loading...</Button>
        ) : (
          <Button>LogIn</Button>
        )}

        {error && <Error error={error + "Invalid user or password"} />}
      </form>
      <Link className={styles.resetPassword} to="/login/lost">
        I forgot my password
      </Link>
      <div className={styles.signUp}>
        <h2 className={styles.subtitle}>Sign Up</h2>
        <p>Not a member yet? </p>
        <Link className={stylesBtn.button} to="/login/create">
          Sign up!!
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
