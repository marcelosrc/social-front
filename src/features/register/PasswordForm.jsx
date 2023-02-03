import commonStyles from "../common/Common.module.css";
import registerStyles from "../register/Register.module.css";

export default function UsernameForm(props) {
  const handleChange = (event) => {
    props.setNewUser({
      ...props.newUser,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className={registerStyles["form"]} ref={props.passwordForm}>
      <div className={registerStyles["form-field"]}>
        <label>
          <p>Senha</p>
        </label>
        <input
          className={commonStyles["standard-input"]}
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
          className={commonStyles["standard-input"]}
          name="passwordConf"
          type="password"
          onChange={handleChange}
        />
        <button
          className={commonStyles["standard-button"]}
          onClick={props.handleSubmit}
        >
          Próximo
        </button>
        <small>Voltar</small>
      </div>
    </div>
  );
}
