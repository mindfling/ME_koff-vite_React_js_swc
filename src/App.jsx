import { Container } from "./views/Container/Container"
import { Footer } from "./views/Footer/Footer"
import { Header } from "./views/Header/Header"
import { Main } from "./views/Main/Main"

const App = () => (
  <>
    <Header />

    <Main>
      <Container>
        <h1>Заголовок веб приложения</h1>
      </Container>
      <Container>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, incidunt.</p>
        </div>
      </Container>
    </Main>

    <Footer />
  </>
)

export default App
