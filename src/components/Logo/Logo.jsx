// import logosvg from './img/logo-header.svg'; // * component
import logosvg from '/img/logo-header.svg'; // * public
import s from './Logo.module.scss';
import { Link } from 'react-router-dom';
import { SITE_TITLE } from '../../const';

// todo no link at Main Page '/'
export const Logo = (props) => (
  <Link
    className={props.className ? `${props.className} ${s.logo}` : s.logo}
    to="/">
    <img
      className={s.img}
      src={logosvg}
      alt={'Логотип мебельного маркета ' + SITE_TITLE}
      title={'Главная страница мебельного маркета ' + SITE_TITLE}
    />
  </Link>
);
