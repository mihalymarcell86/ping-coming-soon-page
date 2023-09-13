import style from "../styles/Attribution.module.scss";

export default function Attribution() {
  return (
    <footer>
      <p className={style.attribution}>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.github.com/mihalymarcell86"
          target="_blank"
          rel="noreferrer"
        >
          Marcell Mihály
        </a>
        .
      </p>
    </footer>
  );
}
