import React from 'react'
import { facts_list, sliderImg } from '../../utils/list'

import c from "./index.module.scss"

import GalleryOne from "../../images/about/DSC03508 2.png"
import GalleryTwo from "../../images/about/DSC03508 3.png"
import { ScrollToTop } from '../../helpers/scroll'

import Zhami from "../../2023-01-22 19.34.13.jpg"

const About = () => {

  React.useEffect(() => {
    ScrollToTop()
  }, [])
  
  return (
    <div className={c.about_page}>
      <div className={c.about_container}>
        <div className={c.about_title}>
          <h2>О компании </h2>
        </div>
        <div className={c.about_content}>
          <h3>
            Компания «Mirissa» - торговая марка чая 
            зарегистрированная в 2019 году.
          </h3>

          <p>
            Наша компания предоставляет чай наивысшего качество, листья которого были выращены на острове Шри Ланка. «Mirissa» - это отечественный бренд в Кыргызстане, точки продаж которого есть во многих супермаркетах Бишкека. Такие как гипермаркет «Глобус» и «Фрунзе». 

            Черный цейлонский чай «Mirissa” отличается насыщенным янтарным цветом, приятным цветочным ароматом и высоким качеством. Чайные плантации «Mirissa” находятся на высоте более 2100 метров  над уровнем моря, где обеспечивается годовая норма осадков, которая необходима для выращивания высококачественного чая.
          </p>
        </div>
      </div>

      <div className={c.about_gallery}>
        <div className={c.about_container}>
          <div className={c.about_gallery_row}>
            {sliderImg.map((item, i) => <img src={item.url} alt='' key={i}/>)}
          </div>
        </div>
      </div>

      <div className={c.about_history}>
        <div className={c.about_container}>
          <div className={c.about_history_title}>
            <h2>История создания компании</h2>
          </div>
          <div className={c.about_history_content}>
            <div>
              <img src={GalleryOne} alt=''/>  
            </div>

            <div className={c.about_row}>
              <div className={c.right}>
                <img src={Zhami} alt=''/>
              </div>
              <div className={c.left}>
                <h2>- Жамилия Молдалиева</h2>
                <p>
                  <span>«</span>Пишу от лица дочери владельца компании так как знаю все подробности в создании компании и видела, как трепетно папа относиться к своему делу. Папа большой любитель чая и всю жизнь я помню как он пробовал, тестировал все чаи, чтобы найти наконец тот самый чай. 
                  Что-бы он был самым вкусным и качественным. 

                  Помню как еще 7 лет назад папа говорил нам, как мечтает создать свой собственный чай, в котором он будет уверен, что-бы не было никаких красок а вкус был на высшем уровне. Он привозил все возможные сорта и листья с Шри Ланки, наш зал был полон разных видов листьев. 
                  Он ночами сидел за столом, нюхал, тестировал в поиске самого идеального сорта. В итоге у него получилось, найти те самые листья и сорт.  Непременно для нас было в первую очередь качество, так как мы были нацелены производить чай самого высшего качества что-бы наши клиенты были уверенны в качестве для своей семьи. 
                  Культура чаепития в Кыргызстане очень популярна и действительно это то, что приносит радость и счастье в семью. Наша семья каждый день собирается за чашечкой чая  с Мириссой, которая наполняет наш дом ароматом и теплой атмосферой дома<span>»</span>
                </p>
              </div>
            </div>
            <div className={c.fact}>
              {facts_list.map(item => <img src={item.img} alt="" key={item.id}/>)}
            </div>
            <div>
              <img src={GalleryTwo} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About