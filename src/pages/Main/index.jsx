import React from 'react';
import Banner from "../../components/Banner";
import Actual from "../../components/Actual";
import Stocks from "../../components/Stocks";
import News from "../../components/News";
import Form from "../../components/Form";
import { ScrollToTop } from '../../helpers/scroll';


function Main() {

  React.useEffect(() => {
    ScrollToTop()
  }, [])

  return (
    <div>
      <Banner/>
      <Actual/>
      <Stocks/>
      <News/>
      <Form/>
    </div>
  );
}

export default Main;