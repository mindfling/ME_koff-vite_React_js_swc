// * header

import { Container } from "../Container/Container";

import Logo from '../../components/Logo/Logo';
import SearchForm from '../../components/SearchForm/SearchForm';
import Navigation from '../../components/Navigation/Navigation';

import style from './Header.module.scss';

export const Header = () => (
  <header className={style.header}>
    <Container className={style.container}>
      <h2>хедер контейнер</h2>
      <div className={style.logo}>
        <Logo></Logo>
      </div>
      <div className={style.search}>
        <SearchForm></SearchForm>
      </div>
      <div className={style.navigation}>
        <Navigation></Navigation>
      </div>
    </Container>
  </header>
)

