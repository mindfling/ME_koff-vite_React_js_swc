// * main
import s from './Main.module.scss';
import { Catalog } from '../Catalog/Catalog';
import { Goods } from '../Goods/Goods';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/categories/categoriesSlice';

export const Main = () => {
  const dispatch = useDispatch();
  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useSelector((state) => state.categories);
  
  useEffect(() => {
    console.log('dataCategories: ', dataCategories);
    console.log('loadingCategories: ', loadingCategories);
    console.log('errorCategories: ', errorCategories);
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <main className={s.main}>
      <Catalog data={dataCategories}/>
      <Goods />
    </main>
  );
}
