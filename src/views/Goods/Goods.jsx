// * Goods
import { CardItem } from '../CardItem/CardItem';
import { Container } from '../Container/Container';
import s from './Goods.module.scss';

export const Goods = ({ data }) => {
  return (
    <section className={s.goods}>
      <Container>
        <h2 className={s.title + ' visuall-hidden'}>Список товаров</h2>

        <ul className={s.list}>
          {data.map((item) => (
            <li className={s.item} key={item.id}>
              <CardItem {...item}/>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
