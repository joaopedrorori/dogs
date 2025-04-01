import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input.jsx";
import Button from "../Forms/Button.jsx";

const LoginForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleLogin(e) {
    e.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => {
        console.log(r);
        return r.json;
      })
      .then((json) => {
        console.log(json);
      });
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleLogin}>
        <Input label="Username" type="text" name="username" />
        <Input label="Password" type="password" name="password" />
        <Button>LogIn</Button>
      </form>
      <Link to="/login/create">Register</Link>
    </section>
  );
};

export default LoginForm;
