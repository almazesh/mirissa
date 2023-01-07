import React from 'react';
import Banner from "../../components/Banner";
import Actual from "../../components/Actual";
import Stocks from "../../components/Stocks";
import News from "../../components/News";
import Form from "../../components/Form";


function Main() {
  return (
    <div>
      <Banner/>
      <Actual/>
      <Stocks/>
      {/*<TeaSelections/>*/}
      {/*<Services/>*/}
      <News/>
      <Form/>
      
    </div>
  );
}

export default Main;