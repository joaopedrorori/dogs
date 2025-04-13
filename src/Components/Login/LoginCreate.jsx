import React from "react";
import Input from "../Forms/Input.jsx";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm.jsx";
import { USER_POST } from "../../api.jsx";
import UserContext from "../../UserContext.jsx";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  // const password = useForm("password");
  // if I want a validation of the password I have just to add the "password parameter for this hook"
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const r = await fetch(url, options);
    if (r.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Create an account</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Username" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Password" type="password" name="password" {...password} />
        <Button>Register</Button>
      </form>
    </section>
  );
};

export default LoginCreate;
