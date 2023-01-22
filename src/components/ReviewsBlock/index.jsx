import React from 'react';
import c from './ReviewsBlock.module.scss'
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {POST_REVIEW} from "../../api/api";

function ReviewsBlock({id, review, modal, setModal}) {
  const [name, setName] = React.useState('')
  const [comment, setComment] = React.useState('')
  const [star, setStar] = React.useState(0)
  
  
  const handleAdd = () => {
    POST_REVIEW({
      name,
      comment,
      product: parseInt(id),
      rating: `${star}`,
    }).then()
    setModal(false)
  }
  
  React.useEffect(() => {
    POST_REVIEW({
      name,
      comment,
      product: parseInt(id),
      rating: `${star}`,
    }).then()
  }, [modal])
  
  return (
    <div className={c.reviews}>
      <div className={c.title_container}>
        <div className={c.title}>
          <h1>Отзывы</h1>
        </div>
      </div>
      <div className={c.user_reviews}>
        <div className={c.review_block}>
          {
            review?.reverse().map(item => (
              <div className={c.review_block_item} key={item.id}>
                <div className={c.block_top}>
                  <p>{item.name}</p>
                  <div className={c.stars}>
                    <span className={c.date}>
                      {item.created_at.split('').slice(0, 10).join('')}
                    </span>
                    <div>
                      {
                        Array(5).fill(0).map((_, i) => (
                          <span key={i}>
                             {
                               parseInt(item.rating) >= i+1 ? <AiFillStar/> : <AiOutlineStar/>
                             }
                          </span>
                        ))
                      }
                    </div>
                  </div>
                </div>
                <div className={c.block_text}>
                  {
                    item.comment
                  }
                </div>
              </div>
            ))
          }
        </div>
        <div className={c.add_review}>
          <button onClick={() => setModal(true)}>
            ОСТАВИТЬ ОТЗЫВ
          </button>
        </div>
      </div>
      
      {
        modal &&
        <>
          <div
            className={c.modal_back}
            onClick={() => setModal(false)}>
          </div>
          <div className={c.modal_window}>
            <div className={c.modal_inner}>
              <div className={c.modal_title}>
                <h1>Новая запись</h1>
              </div>
              <div className={c.modal_inputs}>
                <div className={c.set_stars}>
                  Ваша оценка
                  <div>
                    {
                      Array(5).fill(0).map((_, i) => (
                        <span key={i} onClick={() => setStar(i+1)}>
                          {
                            star >= i+1 ? <AiFillStar/> : <AiOutlineStar/>
                          }
                        </span>
                      ))
                    }
                  </div>
                
                </div>
                <div className={c.inputs}>
                  <div>
                    <label>
                      Ваше имя и первая буква фамилии
                      <input type="text" onChange={e => setName(e.target.value)}/>
                    </label>
                    
                    <label>
                      Ваш комментарий
                      <textarea onChange={e => setComment(e.target.value)}/>
                    </label>
                  </div>
                </div>
              </div>
              <div className={c.save_btn}>
                <button onClick={handleAdd}>
                  СОХРАНИТЬ
                </button>
              </div>
            </div>
          </div>
        </>
      }
    </div>
  );
}

export default ReviewsBlock;