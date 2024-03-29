// * Goods
import { API_URL } from '../../const';
import s from './CardItem.module.scss';

export const CardItem = ({ name, images: [image], price, id }) => {
  const handleFavories = () => {
    console.log(`add product ${name} арт. ${id} to favorites`);
    // addProductToFavorites(id)
  };

  return (
    <article className={s.card} title={`Товар ${name}`}>
      <a href={`/product/${id}`} className={s.link}>
        <img className={s.img} src={`${API_URL}/${image}`} alt={name} />
      </a>
      <div className={s.info}>
        <h3 className={s.title}>
          <a className={s.link} href={`/product/${id}`}>
            {name}
          </a>
        </h3>
        <p className={s.price} title={`Цена товара ${price} р`}>
          {price.toLocaleString()}&nbsp;&#8381;
        </p>
      </div>
      <button className={s.btn} title={'Добавить ' + name + ' в Корзину'}>
        В Корзину
      </button>
      <button
        className={s.favorite}
        onClick={handleFavories}
        title="Like ta Favorites">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            // eslint-disable-next-line max-len
            d="M8.41325 13.8733C8.18658 13.9533 7.81325 13.9533 7.58659 13.8733C5.65325 13.2133 1.33325 10.46 1.33325 5.79332C1.33325 3.73332 2.99325 2.06665 5.03992 2.06665C6.25325 2.06665 7.32658 2.65332 7.99992 3.55998C8.67325 2.65332 9.75325 2.06665 10.9599 2.06665C13.0066 2.06665 14.6666 3.73332 14.6666 5.79332C14.6666 10.46 10.3466 13.2133 8.41325 13.8733Z"
            stroke="#1C1C1C"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </article>
  );
};
