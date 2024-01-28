import { Container } from "../../views/Container/Container";
import s from "./NotFoundPage.module.scss";
export const NotFoundPage = () => (
  <Container>
    <div className={s.error}>
      <h1 className={s.error__title}>Хакеры балуются, что ли?</h1>
      <h3 className={s.error__subtitle}>Страница не найдена ;(</h3>
      <p className={s.error__text}>
        Ошибка номер{" "}
        <a
          className={s.error__link}
          href="https://ru.wikipedia.org/wiki/%D0%9E%D1%88%D0%B8%D0%B1%D0%BA%D0%B0_404"
          target="_blank"
          rel="noreferrer">
          <b>404</b>
        </a>
        , в основном появляется потому что данная страницу не была найдена на
        нашем сайте... <br />
        или из-за чего-то еще...
      </p>
      <p className={s.error__text} title="Переход на главную страницу сайта">
        <a className={s.error__link} href="/">
          Перейти на главную страницу
        </a>
      </p>
    </div>
  </Container>
);
