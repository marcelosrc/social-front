import React from "react";
import { useNavigate } from "react-router-dom";
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
      <UsernameForm
        usernameForm={usernameForm}
        newUser={newUser}
        setNewUser={setNewUser}
      />
      <PersonalDataForm
        personalDataForm={personalDataForm}
        newUser={newUser}
        setNewUser={setNewUser}
      />
      <PasswordForm
        passwordForm={passwordForm}
        newUser={newUser}
        setNewUser={setNewUser}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

/*
  const scrollToUsernameForm = () => {
    usernameForm.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPersonalDataForm = () => {
    personalDataForm.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPasswordForm = () => {
    passwordForm.current.scrollIntoView({ behavior: "smooth" });
  };
*/
