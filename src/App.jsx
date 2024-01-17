import { Container } from './views/Container/Container';
import { Footer } from './views/Footer/Footer';
import { Header } from './views/Header/Header';
import { Main } from './views/Main/Main';

const App = () => (
  <>
    <Header />

    <Main>

      <Container>
        <h1>Список веб товаров</h1>
        <div className="catalogue">
          <ul className="catalogue__list">
            <li className="catalogue__item">
              <a href="#" className="catalogue__link">Тумбы</a>
            </li>
            <li className="catalogue__item">
              <a href="#" className="catalogue__link">Столы</a>
            </li>
          </ul>
        </div>
        <p className='visuall-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex expedita officiis et, esse quidem, consectetur, quas aut soluta commodi sed! Molestias quam, corporis impedit magni dolorem consequuntur explicabo quae.</p>
      </Container>

      <Container>
        <div className="goods">
          <ul className="goods__list">

            <li className="goods__item">
              <article className='card'>
                <img src="" alt="" className="card__image" />
                <div className="card__info">
                  <span className='card__description'></span>
                  <span className="card__price"></span>
                </div>
                <button className="card__btn"></button>
              </article>
            </li>

          </ul>
        </div>
      </Container>

    </Main>

    <Footer />
  </>
);

export default App;
