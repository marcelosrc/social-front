import React from "react";
import globalStyles from "../../styles/Global.module.css";
import registerStyles from "../../styles/Register.module.css";

export default function Register() {
  const firstPage = React.useRef();
  const secondPage = React.useRef();
  const thirdPage = React.useRef();

  const scrollToFirstPage = () => {
    firstPage.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSecondPage = () => {
    secondPage.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToThirdPage = () => {
    thirdPage.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={registerStyles["container"]}>
      <div className={registerStyles["first-form-page"]} ref={firstPage}>
        <div className={registerStyles["username-field"]}>
          <label>
            <p>Usuário</p>
          </label>
          <input className={globalStyles["standard-input"]} />
        </div>
        <button
          className={globalStyles["standard-button"]}
          onClick={scrollToSecondPage}
        >
          Próximo
        </button>
      </div>
      <div className={registerStyles["second-form-page"]} ref={secondPage}>
        <div className={registerStyles["email-field"]}>
          <label>
            <p>Email</p>
          </label>
          <input className={globalStyles["standard-input"]} />
        </div>
        <div className={registerStyles["dob-field"]}>
          <label>
            <p>Data de Nascimento</p>
          </label>
          <input className={globalStyles["standard-input"]} />
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
        <div className={registerStyles["password-field"]}>
          <label>
            <p>Senha</p>
          </label>
          <input className={globalStyles["standard-input"]} />
        </div>
        <div className={registerStyles["password-field"]}>
          <label>
            <p>Confirmar Senha</p>
          </label>
          <input className={globalStyles["standard-input"]} />
        </div>
        <button className={globalStyles["standard-button"]}>Criar</button>
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
