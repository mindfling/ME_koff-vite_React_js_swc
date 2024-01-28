import { Container } from "../../views/Container/Container";
import './NotFoundPage.scss';

export const NotFoundPage = () => (
  <Container>
    <div className="error-page404 page">

      <p>&nbsp;</p>
      <h1>Хакеры балуются, что ли?</h1>
      <h3>Страница не найдена</h3>
      <p>Ошибка номер <b>404</b>, в основном появляется потому что данная страницу не была найдена на нашем сайте...
        или из-за чего-то еще...
      </p><p>
        <a href="/">Перейти на главную страницу</a></p>
      <p></p>
      <p>&nbsp;</p>
    </div>
  </Container>
)
