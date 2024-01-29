// * страничка отдельного товара
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import { Container } from '../Container/Container';
import 'swiper/css';
import s from './Card.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchProduct } from '../../store/product/productSlice';
import { useParams } from 'react-router-dom';

// todo карточка товара
// todo one product slice
export const Card = () => {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { productID } = useParams();
  console.log('Параметр продукта productID: ', productID);

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
                  <img
                    src="http://placehold.jp/6e11bb/ffffff/550x440.png?text=Chair-one"
                    alt="кресло 0" title="кресло 0" />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="http://placehold.jp/303de8/ffffff/550x440.png?text=Chair-two"
                    alt="кресло 2" title="кресло 2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="http://placehold.jp/6e71bb/ffffff/550x440.png?text=Chair-three"
                    alt="кресло 3" title="кресло 3" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="http://placehold.jp/2e712b/ffffff/550x440.png?text=Chair-Four"
                    alt="кресло 0" title="кресло 0" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="http://placehold.jp/303de8/ffffff/550x440.png?text=Chair-Five"
                    alt="кресло 2" title="кресло 2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="http://placehold.jp/6e71bb/ffffff/550x440.png?text=Chair-Six"
                    alt="кресло 3" title="кресло 3" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="http://placehold.jp/9e215b/ffffff/550x440.png?text=Chair-Seven"
                    alt="кресло 3" title="кресло 3" />
                </SwiperSlide>
              </Swiper>
              <button
                onClick={() => mainSwiper.slidePrev()}
                className={s.btn_prev}>
                - prev
              </button>
              <button
                onClick={() => mainSwiper.slideNext()}
                className={s.btn_next}>
                next -
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
                  <img src="http://placehold.jp/6e11bb/ffffff/210x210.png?text=Chair-one" alt="малое кресло" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="http://placehold.jp/303de8/ffffff/210x210.png?text=Chair-two" alt="малое кресло" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="http://placehold.jp/6e71bb/ffffff/210x210.png?text=Chair-three" alt="малое кресло" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="http://placehold.jp/2e712b/ffffff/210x210.png?text=Chair-Four" alt="малое кресло" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="http://placehold.jp/303de8/ffffff/210x210.png?text=Chair-Five" alt="малое кресло" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="http://placehold.jp/6e71bb/ffffff/210x210.png?text=Chair-Six" alt="малое кресло" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="http://placehold.jp/9e215b/ffffff/210x210.png?text=Chair-Seven" alt="малое кресло" />
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
