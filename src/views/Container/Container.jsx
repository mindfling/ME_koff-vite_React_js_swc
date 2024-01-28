// * Container с дочерними элементами
import s from './Container.module.scss';

export const Container = ({ className, children }) =>
  (className ? (
    <div className={`${s.containerOwn} ${className}`}>{children}</div>
  ) : (
    <div className={s.containerOwn}>{children}</div>
  ));
