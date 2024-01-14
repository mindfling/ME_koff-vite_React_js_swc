import logosvg from './logo-koff.svg';
import s from './Logo.module.scss';

export const Logo = () => (
  <a className={s.logo} href="/" >
    <img className={s.img} src={logosvg} alt="Логотип мебельного маркета Koff" title='Главная страница мебельного маркета Koff' />
  </a>
)


