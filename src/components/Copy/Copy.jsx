// import logosvg from './img/logo-header.svg'; // * component
import s from './Copy.module.scss';

export const Copy = ({ className }) => {
  const currentYear = (new Date()).getFullYear();
  console.log('currentYear: ', currentYear);
  return (
    <p className={className ? `${className} ${s.copy}` : s.copy}>
      &copy;&nbsp;Koff,&nbsp;{`2023-${currentYear}`}
    </p>
  )
}
