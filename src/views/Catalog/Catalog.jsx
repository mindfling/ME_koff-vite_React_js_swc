// * Catalog - Список категорий товаров
import { Container } from "../Container/Container";
import s from './Catalog.module.scss';


export const Catalog = ({ data }) => {

  return (
    <nav className={s.catalog}>
      <Container className={s.container}>
        <ul className={s.list}>
          {data.map((cat, i) => (
            <li className={s.item} key={i}>
              <a href={`category/?cat=${cat}`} className={s.link} title={'Товары ' + cat}>
                {cat}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  )
}
