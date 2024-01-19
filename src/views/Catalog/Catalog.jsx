// * Catalogue

export const Catalogue = () => {
  
  return (
    <Container>
    <h1 className="visuall-hidden">Список веб товаров</h1>
    
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
  )
}