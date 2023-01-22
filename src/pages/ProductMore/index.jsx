import React from 'react';
import c from './ProductMore.module.scss'
import {Link, useParams} from "react-router-dom";
import {GET_SINGLE_PRODUCT} from "../../api/api";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import ReviewsBlock from "../../components/ReviewsBlock";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";

function ProductMore() {
  const {id} = useParams()
  const [product, setProduct] = React.useState(null)
  const [modal, setModal] = React.useState(false)
  
  React.useEffect(() => {
    GET_SINGLE_PRODUCT(parseInt(id)).then(res => setProduct(res.data))
  }, [modal])
  
  console.log(product)
  return (
    <div className={c.more}>
      <div className={c.more_title}>
        <h2>
          {product?.title}
        </h2>
        <div>
          <span className={c.more_stars}>
            {
              Array(5).fill(0).map((_, i) => (
                <span key={i}>
                 {
                   product?.total_review > i ?  <AiFillStar/> :  <AiOutlineStar/>
                 }
              </span>
              ))
            }
          </span>
          <span className={c.stars_count}>
            {
              Math.trunc( product?.total_review * 100 ) / 100
            }
          </span>
        </div>
      </div>
      <div className={c.more_content}>
        <div className={c.more_slider}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            speed={1000}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {
              product?.product_images?.map(item => (
                <SwiperSlide key={item.id} className={c.swiper_height}>
                  <img src={item.image} alt="" />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className={c.more_text}>
          <div className={c.structure_text}>
            <p>
              Состав
            </p>
            <p className={c.structure_text_count}>
              Всего {product?.structure?.length}
            </p>
          </div>
          <div className={c.structure_info}>
            {
              product?.structure?.map((item, i) => (
                <div className={c.info_item} key={i}>
                  <img src={item.image} alt="" />
                  <p>{item.title}</p>
                </div>
              ))
            }
          </div>
          <div className={c.options}>
            <ul className={c.options_list}>
              <li>
                <p>
                  <span>Страна/Регион</span>
                </p>
                <div>
                  {product?.country}
                </div>
              </li>
              <li>
                <p>
                  <span>Вид</span>
                </p>
                <div>
                  {product?.country}
                </div>
              </li>
              <li>
                <p>
                  <span>Вкус</span>
                </p>
                <div>
                  {
                    product?.taste?.map(item => (
                      <span key={item.id}>
                        {item.title},
                      </span>
                    ))
                  }
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={c.more_description}>
        <div className={c.title_container}>
          <div className={c.title}>
            <h1>Описание</h1>
          </div>
        </div>
        <div className={c.more_description_text}>
          <div className={c.text}>
            <p>
              {product?.description}
            </p>
          </div>
          <div className={c.description_block}>
            <div className={c.block}>
              <div className={c.card}>
                <img src='https://www.ggau.by/images/2011/stanislawowo/stanislawowo-2.jpg' alt=''/>
      
                <h2>Знак высокого качества</h2>
      
                <p>Лев с мечом - знак качества родом из Цейлона</p>
      
                <Link to={"/quality"}>Подробнее</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReviewsBlock
        id={id}
        review={product?.review_product}
        modal={modal}
        setModal={setModal}/>
    </div>
  );
}

export default ProductMore;