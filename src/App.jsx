import { useDispatch, useSelector } from 'react-redux';
import { Footer } from './views/Footer/Footer';
import { Header } from './views/Header/Header';
import { useEffect } from 'react';
import { fetchAccessToken } from './store/auth/authSlice';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Catalog } from './views/Catalog/Catalog';
import { Goods } from './views/Goods/Goods';
import { Cart } from './views/Cart/Cart';
import { Container } from './views/Container/Container';


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
          <Container>
            <p>Загрузка страницы избранное</p>
          </Container>
          {/* <Catalog /> */}
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
          {/* <Catalog /> */}
          <Container>
            <p>Товар артику ...</p>
          </Container>
          {/* <Cart /> */}
        </main>
        <Footer />
      </>
    ),
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
