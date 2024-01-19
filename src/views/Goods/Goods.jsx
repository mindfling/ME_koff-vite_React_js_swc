// * Goods

export const Goods = () => {
  
  return (
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
  )
}