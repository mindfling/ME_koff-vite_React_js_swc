// * Goods
import { CardItem } from '../CardItem/CardItem';
import { Container } from '../Container/Container';
import s from './Goods.module.scss';


export const Goods = () => {

  return (
    <div className={s.goods}>
      <Container>
        <ul className={s.list}>

          <li className={s.item}>
            <CardItem />
          </li>

          <li className={s.item}>
            <CardItem />
          </li>

          <li className={s.item}>
            <CardItem />
          </li>

          <li className={s.item}>
            <CardItem />
          </li>

          <li className={s.item}>
            <CardItem />
          </li>

        </ul>
      </Container>
    </div>
  )
}
