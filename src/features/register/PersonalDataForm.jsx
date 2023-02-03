import commonStyles from "../common/Common.module.css";
import registerStyles from "../register/Register.module.css";

export default function PersonalDataForm(props) {
  const handleChange = (event) => {
    props.setNewUser({
      ...props.newUser,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div
      className={registerStyles["form"]}
      ref={props.personalDataForm}
    >
      <div className={registerStyles["form-field"]}>
        <label>
          <p>Email</p>
        </label>
        <input
          className={commonStyles["standard-input"]}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className={registerStyles["form-field"]}>
        <label>
          <p>Data de Nascimento</p>
        </label>
        <input
          className={commonStyles["standard-input"]}
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
          className={commonStyles["standard-input"]}
          name="gender"
          onChange={handleChange}
        />
        <button className={commonStyles["standard-button"]}>Próximo</button>
        <small>Voltar</small>
      </div>
    </div>
  );
}
