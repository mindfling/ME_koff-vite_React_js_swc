import { useDispatch, useSelector } from 'react-redux';

import { Footer } from './views/Footer/Footer';
import { Header } from './views/Header/Header';
import { Main } from './views/Main/Main';
import { useEffect } from 'react';
import { fetchAccessToken } from './store/auth/authSlice';

const App = () => {
  const dispatch = useDispatch();
  const { accessToken, loading } = useSelector(state => state.auth);
  
  useEffect(() => {
    dispatch(fetchAccessToken())
  }, [dispatch, accessToken]);
  
  
return (
  <>
    <Header />
    <Main />
    <Footer />
  </>
)
}

export default App;
