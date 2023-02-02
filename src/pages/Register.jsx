import React from "react";
import { useNavigate } from "react-router-dom";
import commonStyles from "../features/common/Common.module.css";
import registerStyles from "../features/register/Register.module.css";
import UsernameForm from "../features/register/UsernameForm";
import PersonalDataForm from "../features/register/PersonalDataForm";
import PasswordForm from "../features/register/PasswordForm";

export default function Register() {
  const usernameForm = React.useRef();
  const personalDataForm = React.useRef();
  const passwordForm = React.useRef();
  const navigate = useNavigate();
  const [newUser, setNewUser] = React.useState({
    username: "",
    email: "",
    dob: "",
    gender: "",
    password: "",
    passwordConf: "",
  });

  const scrollToUsernameForm = () => {
    usernameForm.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPersonalDataForm = () => {
    personalDataForm.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPasswordForm = () => {
    passwordForm.current.scrollIntoView({ behavior: "smooth" });
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
      <div className={registerStyles["first-form-page"]} ref={usernameForm}>
        <UsernameForm newUser={newUser} setNewUser={setNewUser} />
        <button
          className={commonStyles["standard-button"]}
          onClick={scrollToPersonalDataForm}
        >
          Próximo
        </button>
      </div>
      <div
        className={registerStyles["second-form-page"]}
        ref={personalDataForm}
      >
        <PersonalDataForm newUser={newUser} setNewUser={setNewUser} />
        <button
          className={commonStyles["standard-button"]}
          onClick={scrollToPasswordForm}
        >
          Próximo
        </button>
        <button
          className={commonStyles["standard-button"]}
          onClick={scrollToUsernameForm}
        >
          Voltar
        </button>
      </div>
      <div className={registerStyles["third-form-page"]} ref={passwordForm}>
        <PasswordForm newUser={newUser} setNewUser={setNewUser} />
        <button
          className={commonStyles["standard-button"]}
          onClick={handleSubmit}
        >
          Criar
        </button>
        <button
          className={commonStyles["standard-button"]}
          onClick={scrollToPersonalDataForm}
        >
          Voltar
        </button>
      </div>
    </div>
  );
}
