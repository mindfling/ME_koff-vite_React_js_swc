// * Catalog - Список категорий товаров
import { Container } from "../Container/Container";
import s from './Catalog.module.scss';


export const Catalog = ({data}) => {
  console.log('Список товаров в каталог data: ', data);

  return (
    <Container className={s.container}>
      <div className={s.catalog}>
        <ul className={s.list}>
          { data.map((cat, i) => (
              <li className={s.item} key={i}>
                <a href={`/?cat=${cat}`} className={s.link} title={'Товар ' + cat}>
                  {i + 1 + ' ' + cat}
                </a>
              </li>
            )) }
        </ul>
      </div>
    </Container>
  )
}
