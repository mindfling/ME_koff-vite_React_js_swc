import logosvg from './logo-koff.svg';
import s from './Logo.module.scss';

export const Logo = () => (
  <div className={s.logo}>
    <img src={logosvg} alt="logo lgoo" className="logo" />
  </div>
)
