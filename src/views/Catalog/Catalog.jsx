// * Catalog - Menu list of categories
import { Container } from "../Container/Container";
import s from './Catalog.module.scss';


export const Catalog = () => {

  const goodsList = ['Диваны', 'Шкафы', 'Стулья', 'Тумбы', 'Кровати', 'Столы', 'Комоды', 'Матрасы', 'Пуфики', 'Стеллажи'];
  console.log('DEBUG goodsList: ', goodsList);

  return (
    <Container className={s.container}>
      <h1 className="visuall-hidden">Список веб товаров</h1>

      <div className={s.catalog}>
        <ul className={s.list}>
          { goodsList.map((good, index) => (
              <li className={s.item} key={index}> {/* // todo */}
                <a href="#" className={s.link} title={'Товар ' + good}>{good}</a>
              </li>
            )) }
        </ul>
      </div>
    </Container>
  )
}
