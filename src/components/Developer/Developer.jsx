import s from './Developer.module.scss';

export const Developer = ({ className }) => {
  return (
    <ul className={className ? `${className} ${s.developer}` : s.developer}>
      <li className={s.developer_item}>Designer:&nbsp;<a
        className="footer__developer-link"
        target="_blank"
        rel="noreferrer"
        href="https://t.me/Mrshmallowww"
        title='@Mrshmallowww'
      >
        Anastasia&nbsp;Ilina
      </a></li>
      <li className={s.developer_item}>Developer:&nbsp;<a
        className="footer__developer-link"
        target="_blank"
        rel="noreferrer"
        href="https://t.me/quper24"
        title='@Mindfling'
      >
        Dim&nbsp;MindFling
      </a></li>
    </ul>
  )
}
