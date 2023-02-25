import React from 'react';
import c from './Partners.module.scss'
import {partners_img} from "../../utils/list";
import {GET_PARTNERS} from "../../api/api";
import {Loader} from "../../components/Loader/Loader";
import {ScrollToTop} from "../../helpers/scroll";

function Partners() {
  const [data, setData] = React.useState(null)
  
  React.useEffect(() => {
    ScrollToTop()
    GET_PARTNERS().then(r => setData(r.data))
  }, [])
  
  if(!data) return <Loader/>
  return (
    <div className={c.partners}>
      <div className={c.partners_title}>
        <h2>Партнеры</h2>
      </div>
      {
        data.map(item => (
          <div className={c.partners_content} key={item.id}>
            <span>{item.title}</span>
            <div className={c.images}>
              {
                item.partner.map(image => (
                  <img key={image                           .id} src={image.image} alt={''}/>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Partners;