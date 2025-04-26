import React from "react";
import Input from "../Forms/Input.jsx";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm.jsx";
import useFetch from "../../Hooks/useFetch.jsx";
import { PASSWORD_LOST } from "../../api.jsx";
import Error from "../Helper/Error.jsx";

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("lost", "reset"),
      });

      const { json } = await request(url, options);
      console.log(json);
    }
  }
  return (
    <section>
      <h1 className="title">Forgot your password?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>
          {data.replace("Email enviado.", "E-mail was sent.")}
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="E-mail/User" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Sending...</Button>
          ) : (
            <Button>Send e-mail</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
