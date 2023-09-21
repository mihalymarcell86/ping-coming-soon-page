import style from "../styles/Form.module.scss";

import { useState } from "react";
import { isEmpty, isEmail } from "validator";

export default function Form() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [touched, setTouched] = useState(false);

  function validate(string) {
    if (isEmpty(string))
      setError("Whoops! It looks like you forgot to add your email");
    else if (!isEmail(string)) setError("Please provide a valid email address");
    else {
      setError(null);
      return true;
    }
    return false;
  }

  function handleChange({ target: { value: string } }) {
    setEmail(string);
    if (touched) validate(string);
  }

  function handleBlur({ target: { value: string } }) {
    setTouched(true);
    validate(string);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate(e.target[0].value)) {
      setEmail("");
      setError(null);
      setTouched(false);
    }
  }

  return (
    <form className={style.form} onSubmit={handleSubmit} noValidate>
      <input
        type="email"
        placeholder="Your email address&hellip;"
        autoComplete="email"
        className={`${style.input} ${error ? style.error : ""}`}
        onChange={handleChange}
        onBlur={handleBlur}
        value={email}
      />
      {error && <p className={style.error_message}>{error}</p>}
      <button className={style.button} onPointerUp={() => blur()}>
        Notify Me
      </button>
    </form>
  );
}
