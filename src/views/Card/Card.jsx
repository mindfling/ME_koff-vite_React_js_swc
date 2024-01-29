// * страничка отдельного товара
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import { Container } from '../Container/Container';
import 'swiper/css';
import s from './Card.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchProduct } from '../../store/product/productSlice';

// todo карточка товара
// todo one product slice
export const Card = () => {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // const dispatch = useDispatch();

  // const { data, loading, error } = useSelector((state) => state.product);

  // useEffect(() => {
  //   dispatch(fetchProduct());
  // }, [dispatch]);

  // if success
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
              <Swiper
                modules={[Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                onSwiper={setMainSwiper}>
                <SwiperSlide>
                  <img src="/img/photo.jpg" alt="кресло 0" title="кресло 0" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/img/photo.jpg" alt="кресло 2" title="кресло 2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/img/photo.jpg" alt="кресло 3" title="кресло 3" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/img/photo.jpg" alt="кресло 0" title="кресло 0" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/img/photo.jpg" alt="кресло 2" title="кресло 2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/img/photo.jpg" alt="кресло 3" title="кресло 3" />
                </SwiperSlide>
              </Swiper>
              <button
                onClick={() => mainSwiper.slideNext()}
                className={s.btn_next}>
                next -
              </button>
              <button
                onClick={() => mainSwiper.slidePrev()}
                className={s.btn_prev}>
                - prev
              </button>
            </div>

            <div className={s.sliderThumbnails}>
              <Swiper
                onSwiper={setThumbsSwiper}
                watchSlidesProgress
                spaceBetween={14}
                slidesPerView={4}
                freeMode={true}>
                <SwiperSlide>
                  <img src="/img/photo.jpg" alt="малое кресло" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/img/photo.jpg" alt="малое кресло" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/img/photo.jpg" alt="малое кресло" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/img/photo.jpg" alt="малое кресло" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/img/photo.jpg" alt="малое кресло" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/img/photo.jpg" alt="малое кресло" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className={s.info}>
            <p className={s.price}>{'5000'.toLocaleLowerCase()}&nbsp;R</p>
            <p className={s.article}>артикул товара, 21315757</p>

            <div className={s.characteristics}>
              <h3>Общие характеристики:</h3>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
