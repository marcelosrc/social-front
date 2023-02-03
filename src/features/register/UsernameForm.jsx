import React from "react";
import { useNavigate } from "react-router-dom";
import commonStyles from "../common/Common.module.css";
import registerStyles from "../register/Register.module.css";

export default function UsernameForm(props) {
  const minLength = 8;
  const maxLength = 20;
  const allowedChars = "abcdefghijklmnopqrstuvwxyz1234567890";
  const [usernameCheck, setUsernameCheck] = React.useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    props.setNewUser({
      ...props.newUser,
      [event.target.name]: event.target.value,
    });

    if (event.target.value.length >= minLength) {
      fetch("/users/find", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: event.target.value }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "OK") {
            setUsernameCheck(true);
          } else {
            setUsernameCheck(false);
          }
        });
    } else {
      setUsernameCheck(false);
    }
  };

  const toLoginPage = () => {
    navigate("/login");
  };

  return (
    <div className={registerStyles["form"]} ref={props.usernameForm}>
      <div className={registerStyles["title"]}>
        <p className={commonStyles["standard-title"]}>Crie seu usuário</p>
      </div>
      <div className={registerStyles["fields-area"]}>
        <div className={registerStyles["field"]}>
          <input
            className={commonStyles["standard-input"]}
            name="username"
            type="text"
            autoComplete="off"
            maxLength={maxLength}
            onChange={handleChange}
          />
        </div>
        <div className={registerStyles["username-rules"]}>
          <small className={commonStyles["standard-bold"]}>
            Seu usuário deve cumprir as seguintes exigências:
          </small>
          <small
            className={
              props.newUser.username.length >= minLength
                ? commonStyles["standard-confirmation-text"]
                : commonStyles["standard-denial-text"]
            }
          >
            Ter entre pelo menos {minLength} caracteres (máx. {maxLength})
          </small>
          <small
            className={
              !allowedChars.split("").includes(props.newUser.username.split(""))
                ? commonStyles["standard-confirmation-text"]
                : commonStyles["standard-denial-text"]
            }
          >
            Ser constituído apenas de letras minúsculas e números
          </small>
          <small
            className={
              usernameCheck
                ? commonStyles["standard-confirmation-text"]
                : commonStyles["standard-denial-text"]
            }
          >
            Não ter sido usado anteriormente por você ou outra pessoa
          </small>
        </div>
      </div>
      <div className={registerStyles["buttons-area"]}>
        <button className={commonStyles["standard-button"]}>Próximo</button>
        <small onClick={toLoginPage}>Voltar</small>
      </div>
    </div>
  );
}

/*

  const handleChange = (event) => {
    //CHECAR SE O AUTOCOMPLETE TRAZ SIMBOLO QUE NÃO EXISTE EM ALLOWEDCHARS

    if (
      allowedChars
        .split("")
        .includes(event.target.value.charAt(event.target.value.length - 1)) &&
      event.target.value.length < fieldLength
    ) {
      props.setNewUser({
        ...props.newUser,
        [event.target.name]: event.target.value,
      });
    } else {
      event.target.value = event.target.value.slice(0, -1);
    }

    if (event.target.value.length >= 7) {
      fetch("/users/find", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: event.target.value }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "OK") {
            setUsernameCheck(
              <small className={commonStyles["standard-green"]}>
                Usuário disponível
              </small>
            );
          } else {
            setUsernameCheck(
              <small className={commonStyles["standard-red"]}>
                Usuário indisponível
              </small>
            );
          }
        });
    } else {
      setUsernameCheck(null);
    }
  };
*/
