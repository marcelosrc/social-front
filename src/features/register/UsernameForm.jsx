import React from "react";
import commonStyles from "../common/Common.module.css";
import registerStyles from "../register/Register.module.css";

export default function UsernameForm(props) {
  const fieldLength = 20;
  const allowedChars = "abcdefghijklmnopqrstuvwxyz1234567890_-";
  const [usernameCheck, setUsernameCheck] = React.useState(null);

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
                Usuário Disponível
              </small>
            );
          } else {
            setUsernameCheck(
              <small className={commonStyles["standard-red"]}>
                Usuário Indisponível
              </small>
            );
          }
        });
    } else {
      setUsernameCheck(null);
    }
  };

  return (
    <div className={registerStyles["form-field"]}>
      <label>
        <p>Usuário</p>
      </label>
      <input
        className={commonStyles["standard-input"]}
        name="username"
        type="text"
        autoComplete="off"
        maxLength={fieldLength}
        onChange={handleChange}
      />
      {usernameCheck}
    </div>
  );
}
