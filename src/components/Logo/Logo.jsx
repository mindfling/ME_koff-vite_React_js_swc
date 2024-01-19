// import logosvg from './img/logo-header.svg'; // * component
import logosvg from '/img/logo-header.svg'; // * public
import s from './Logo.module.scss';

export const Logo = (props) => (
  <a className={props.className ? `${props.className} ${s.logo}` : s.logo} href="/" >
    <img
      className={s.img}
      src={logosvg}
      alt="Логотип мебельного маркета Koff"
      title='Главная страница мебельного маркета Koff'
    />
  </a>
)
