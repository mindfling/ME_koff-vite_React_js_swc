import { Container } from "../../views/Container/Container";
// import './NotFoundPage.scss';
import s from './NotFoundPage.module.scss';

export const NotFoundPage = () => (
  <Container>
    <div className="error__not-found">
      <h1 className="error__title">Хакеры балуются, что ли?</h1>
      <h3 className="error__subtitle">Страница не найдена ;(</h3>
      <p className="error__text">Ошибка номер <b>404</b>, в основном появляется потому что данная страницу не была найдена на нашем сайте...
        или из-за чего-то еще...</p>
      <p className="error__text" title="Переход на главную страницу сайта"><a href="/">Перейти на главную страницу</a></p>
    </div>
  </Container>
)
