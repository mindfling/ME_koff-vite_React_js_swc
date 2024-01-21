import { useDispatch, useSelector } from 'react-redux';

import { Footer } from './views/Footer/Footer';
import { Header } from './views/Header/Header';
import { Main } from './views/Main/Main';
import { useEffect } from 'react';
import { fetchAccessToken } from './store/auth/authSlice';

const App = () => {
  const dispatch = useDispatch();
  const { accessToken, loading } = useSelector(state => state.auth);
  console.log('loading: ', loading);
  
  useEffect(() => {
    if (!accessToken) {
      console.log('нет токена accessToken: ', accessToken);
      dispatch(fetchAccessToken())
    }
    

  }, [dispatch, accessToken]);


  return (
    <>
      <Header />
      {/* если загрузка закончилать и есть токен */}
      { !loading && accessToken ? <Main /> : <p>Ожидание загрузки</p>}
      <Footer />
    </>
  );
};

export default App; 
