import "./Login.scss";
import Input from "../../components/Input/Input";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/users/login`, {
        username: event.target.username.value,
        password: event.target.password.value,
      });

      sessionStorage.setItem("token", response.data);

      // TODO: Make this work without refresh
      // navigate("/");
      window.location.href = "/";
    } catch (error) {
      setErrorMessage("Please try again");
    }
  };

  return (
    <main className="login-page">
      <h1 className="login-page__title">Log in</h1>

      <form onSubmit={handleSubmit}>
        <Input type="text" name="username" label="Username" />
        <Input type="password" name="password" label="Password" />

        <button className="login-page__button">Log in</button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}
    </main>
  );
}
