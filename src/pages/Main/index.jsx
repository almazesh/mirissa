import React from 'react';
import c from './Main.module.scss'
import Banner from "../../components/Banner";
import Actual from "../../components/Actual";
import Stocks from "../../components/Stocks";
import Form from "../../components/Form";
import { ScrollToTop } from '../../helpers/scroll';
import Contests from "../Contests";


function Main() {
  React.useEffect(() => {
    ScrollToTop()
  }, [])

  return (
    <div>
      <Banner/>
      <Actual/>
      <Stocks/>
      <Contests/>
      <Form/>
    </div>
  );
}

export default Main;