import "./SignUp.scss";
import Input from "../../components/Input/Input";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const password = event.target.password.value;
    const username = event.target.username.value;

    if (!username || !password || !name) {
      setErrorMessage("Please provide a name, username and password");
      return;
    }

    try {
      await axios.post(`${API_URL}/users/`, {
        username: username,
        password: password,
        name: name,
      });

      navigate("/login");
    } catch (error) {
      setErrorMessage("Please try again");
    }
  };

  return (
    <main className="signup-page">
      <h1 className="signup-page__title">Sign up</h1>

      <form onSubmit={handleSubmit}>
        <Input type="text" name="name" label="Name" />
        <Input type="text" name="username" label="Username" />
        <Input type="password" name="password" label="Password" />

        <button className="signup-page__button">Sign up</button>
      </form>

      {errorMessage && <p className="signup-page__error">{errorMessage}</p>}
    </main>
  );
}
