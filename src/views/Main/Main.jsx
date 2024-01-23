// * main
import s from './Main.module.scss';
import { Catalog } from '../Catalog/Catalog';
import { Goods } from '../Goods/Goods';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/categories/categoriesSlice';
import { fetchProducts } from '../../store/products/productsSlice';

export const Main = () => {
  const dispatch = useDispatch();
  
  // todo перенести в Catalog
  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useSelector((state) => state.categories ); // todo
  
  // todo перенести в Goods
  const {
    data: dataProducts,
    loading: loadingProducts,
    error: errorProducts,
  } = useSelector( state => state.products ); // todo
  
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);


  if (loadingCategories || loadingProducts) {
    return <div className="good__info">Загрузка товаров и категорий...</div>
  }
  if (errorCategories) {
    return <div className="good__error">Ошибка загрузки категорий {errorCategories} :(</div>
  }
  if (errorProducts) {
    return <div className="good__error">Ошибка загрузки товаров {errorProducts} :(</div>
  }

  // todo избавиться от передаваемых параметров
  return (
    <main className={s.main}>
      <Catalog data={dataCategories}/>
      <Goods data={dataProducts} />
    </main>
  );
}
