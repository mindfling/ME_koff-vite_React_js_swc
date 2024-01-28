// * Goods
import { useDispatch, useSelector } from 'react-redux';
import { CardItem } from '../CardItem/CardItem';
import { Container } from '../Container/Container';
import s from './Goods.module.scss';
import { useEffect } from 'react';
import { fetchProducts } from '../../store/products/productsSlice';

/* wise component более назависим, находятся во view и
    загружает данные внутри себя */
export const Goods = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  /* Пока идет загрузка */
  if (loading) {
    return (
      <>
        <div className={s.catalog}>
          <Container>
            <div className={s.list}>
              <p>Загрузка списка товаров</p>
            </div>
          </Container>
        </div>
      </>
    );
  }

  /* Когда выпала ошибка */
  if (error) {
    return (
      <>
        <Container>
          <p>Ошибка загрузки товаров {error}</p>
        </Container>
      </>
    );
  }

  /* //todo когда всё нормально загрузилось */
  return (
    <section className={s.goods}>
      <Container>
        <h2 className={s.title + ' visuallyy-hidden'}>Список товаров Goods</h2>

        <ul className={s.list}>
          {data.map((item) => (
            <li className={s.item} key={item.id}>
              <CardItem {...item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
