// * header
import { Container } from '../Container/Container';
import { Logo } from '../../components/Logo/Logo';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { Navigation } from '../../components/Navigation/Navigation';
import style from './Header.module.scss';

export const Header = () => (
  <header className={style.header}>
    <Container className={style.container}>
      <Logo className={style.logo} />
      <SearchForm className={style.search} />
      <Navigation className={style.navigation} />
    </Container>
  </header>
);
