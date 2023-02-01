import React from "react";
import { useNavigate } from "react-router-dom";
import globalStyles from "../../styles/Global.module.css";
import registerStyles from "../../styles/Register.module.css";

export default function Register() {
  const firstPage = React.useRef();
  const secondPage = React.useRef();
  const thirdPage = React.useRef();
  const navigate = useNavigate();
  const [newUser, setNewUser] = React.useState({
    username: "",
    email: "",
    dob: "",
    gender: "",
    password: "",
    passwordConf: "",
  });

  const scrollToFirstPage = () => {
    firstPage.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSecondPage = () => {
    secondPage.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToThirdPage = () => {
    thirdPage.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    fetch("/users/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === "OK") {
          navigate("/");
        } else {
          alert(data.message);
        }
      });
  };

  return (
    <div className={registerStyles["container"]}>
      <div className={registerStyles["first-form-page"]} ref={firstPage}>
        <div className={registerStyles["form-field"]}>
          <label>
            <p>Usuário</p>
          </label>
          <input
            className={globalStyles["standard-input"]}
            name="username"
            onChange={handleChange}
          />
        </div>
        <button
          className={globalStyles["standard-button"]}
          onClick={scrollToSecondPage}
        >
          Próximo
        </button>
      </div>
      <div className={registerStyles["second-form-page"]} ref={secondPage}>
        <div className={registerStyles["form-field"]}>
          <label>
            <p>Email</p>
          </label>
          <input
            className={globalStyles["standard-input"]}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className={registerStyles["form-field"]}>
          <label>
            <p>Data de Nascimento</p>
          </label>
          <input
            className={globalStyles["standard-input"]}
            name="dob"
            type="date"
            onChange={handleChange}
          />
        </div>
        <div className={registerStyles["form-field"]}>
          <label>
            <p>Sexo</p>
          </label>
          <input
            className={globalStyles["standard-input"]}
            name="gender"
            onChange={handleChange}
          />
        </div>
        <button
          className={globalStyles["standard-button"]}
          onClick={scrollToThirdPage}
        >
          Próximo
        </button>
        <button
          className={globalStyles["standard-button"]}
          onClick={scrollToFirstPage}
        >
          Voltar
        </button>
      </div>
      <div className={registerStyles["third-form-page"]} ref={thirdPage}>
        <div className={registerStyles["form-field"]}>
          <label>
            <p>Senha</p>
          </label>
          <input
            className={globalStyles["standard-input"]}
            name="password"
            type="password"
            onChange={handleChange}
          />
        </div>
        <div className={registerStyles["form-field"]}>
          <label>
            <p>Confirmar Senha</p>
          </label>
          <input
            className={globalStyles["standard-input"]}
            name="passwordConf"
            type="password"
            onChange={handleChange}
          />
        </div>
        <button
          className={globalStyles["standard-button"]}
          onClick={handleSubmit}
        >
          Criar
        </button>
        <button
          className={globalStyles["standard-button"]}
          onClick={scrollToSecondPage}
        >
          Voltar
        </button>
      </div>
    </div>
  );
}
