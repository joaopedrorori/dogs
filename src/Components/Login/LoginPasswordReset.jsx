import React from "react";
import Input from "../Forms/Input.jsx";
import Button from "../Forms/Button.jsx";
import useFetch from "../../Hooks/useFetch.jsx";
import useForm from "../../Hooks/useForm.jsx";
import { PASSWORD_RESET } from "../../api";
import Error from "../Helper/Error.jsx";
import { useNavigate } from "react-router-dom";
import Head from "../Helper/Head.jsx";

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const parms = new URLSearchParams(window.location.search);
    const key = parms.get("key");
    const login = parms.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });

      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Reset password" />
      <h1 className="title">Reset your password</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Set your new password"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Seting new password</Button>
        ) : (
          <Button>Set new password</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginPasswordReset;
