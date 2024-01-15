import { Container } from './views/Container/Container';
import { Footer } from './views/Footer/Footer';
import { Header } from './views/Header/Header';
import { Main } from './views/Main/Main';

const App = () => (
  <>
    <Header />

    <Main>
      <Container>
        <h1>Заголовок веб приложения</h1>
      </Container>
      <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde suscipit eligendi beatae consectetur dolorem,
          quae at nemo quis sequi velit in? Assumenda debitis ratione placeat cumque asperiores?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos possimus facere repudiandae qui eaque amet ut
          harum consectetur vitae eius impedit tempora earum nobis aspernatur, reiciendis adipisci
        </p>
      </Container>
    </Main>

    <Footer />
  </>
);

export default App;
