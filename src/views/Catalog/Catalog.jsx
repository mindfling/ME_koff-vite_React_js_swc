// * Catalog - Список категорий товаров
import s from './Catalog.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../Container/Container';
import { useEffect } from 'react';
import { fetchCategories } from '../../store/categories/categoriesSlice';

export const Catalog = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
    console.log('data products reloaded');
  }, [dispatch]);

  if (loading) {
    return (
      <>
        <div className={s.catalog}>
          <Container>
            <p>Загрузка каталога товаров</p>
          </Container>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Container>
          <p>Ошибка загрузки каталога товаров</p>
        </Container>
      </>
    );
  }

  return (
    <nav className={s.catalog}>
      <Container className={s.container}>
        <ul className={s.list}>
          {data.map((cat, i) => (
            <li className={s.item} key={i}>
              <a
                href={`/category/?cat=${cat}`}
                className={s.link}
                title={'Товары из категории ' + cat}>
                {cat}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};
