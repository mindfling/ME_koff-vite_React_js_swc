import logosvg from './logo-koff.svg';
import s from './Logo.module.scss';

export const Logo = () => (
  <div className={s.logo}>
    <a className="header__link-logo" href="/" >
      <img className="header__logo" src="/logo-koff.svg" alt="Логотип мебельного маркета Koff" title='Главная страница мебельного маркета Koff'/>
    </a>
    <img src={logosvg} alt="Логотип мебельного маркета Koff" />
  </div>
)


