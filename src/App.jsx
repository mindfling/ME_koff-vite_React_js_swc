import { useDispatch, useSelector } from 'react-redux';
import { Footer } from './views/Footer/Footer';
import { Header } from './views/Header/Header';
import { useEffect } from 'react';
import { fetchAccessToken } from './store/auth/authSlice';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Catalog } from './views/Catalog/Catalog';
import { Goods } from './views/Goods/Goods';
import { Card } from './views/Card/Card';
import { Cart } from './views/Cart/Cart';
import { Container } from './views/Container/Container';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';


/* выводим разное содержимое в зависимости от адреса роута */
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: '/favorite',
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Container>
            <p>Загрузка страницы избранное</p>
          </Container>
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: '/category',
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Container>
            <p>Список товаров по категориям</p>
          </Container>
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: '/search',
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Container>
            <p>Поиск товаров</p>
          </Container>
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: '/cart',
    element: (
      <>
        <Header />
        <main>
          {/* <Catalog /> */}
          <Cart />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: '/product/:productID',
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Card />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: '*',
    element: (
      <>
      <Header></Header>
      <main>
        <NotFoundPage />
      </main>
      <Footer></Footer>
      </>
    )
  },
])


const App = () => {
  const dispatch = useDispatch();
  const { accessToken, loading } = useSelector(state => state.auth);

  useEffect(() => {
    if (!accessToken) {
      dispatch(fetchAccessToken())
    }
  }, [dispatch, accessToken]);


  if (loading) {
    return (
      <>
        <div>Загрузка . . .</div>
      </>
    )
  }

  return (
    <RouterProvider router={router} />
  );
};


export default App; 
