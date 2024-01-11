// * header

import { Container } from "../Container/Container";
import style from './Header.module.scss';

export const Header = () => (
  <header className={style.header}>
    <Container>
      <h2>хедер контейнер</h2>
      <div className="logo">
        Logo
      </div>
      <div className="search">
        SearchForm
      </div>
      <div className="navigation">
        Navigation
      </div>
    </Container>
  </header>
)

