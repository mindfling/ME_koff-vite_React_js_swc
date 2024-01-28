import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import { Container } from '../Container/Container';
import s from './Card.module.scss';

// todo карточка товара
// todo product slice
export const Card = () => {
  console.log('card');
  return (
    <>
      <section className={s.card}>
        <Container className={s.container}>
          <p>
            Отдельная страница товара <b>Card</b>
          </p>
          <h2 className={s.title}>Кресло с локотниками</h2>

          <div className={s.picture}>
            <div className={s.sliderMain}>
              <Swiper modules={[Thumbs]}>
                <SwiperSlide>
                  <img
                    src="/img/photo.jpg"
                    alt="Фото кресло 0"
                    title="Фото кресло 0"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/img/photo.jpg"
                    alt="Фото кресло 2"
                    title="Фото кресло 2"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/img/photo.jpg"
                    alt="Фото кресло 3"
                    title="Фото кресло 3"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className={s.info}>
            <p className={s.price}>{'5000'.toLocaleLowerCase()}&nbsp;R</p>
            <p className={s.article}>артикул товара, 21315757</p>

            <div className={s.characteristics}>
              <h3>Общие характеристики</h3>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
