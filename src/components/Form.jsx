import style from "../styles/Form.module.scss";

export default function Form() {
  return (
    <form className={style.form} noValidate>
      <input
        type="email"
        placeholder="Your email address&hellip;"
        autoComplete="email"
        className={style.input}
      />
      <button className={style.button}>Notify Me</button>
    </form>
  );
}
