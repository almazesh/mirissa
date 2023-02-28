import React from 'react';
import c from './Contests.module.scss'
import {GET_CONTEST} from "../../api/api";
import {Loader} from "../../components/Loader/Loader";
import ContestsBlock from "../../components/ContestsBlock";
import {ScrollToTop} from "../../helpers/scroll";
import Empty from "../../components/EmptyText";

function Contests() {
  const [data, setData] = React.useState(null)
  const [filteredData, setFilteredData] = React.useState(null)
  const [selectedDate, setSelectedDate] = React.useState(1)
  
  React.useEffect(() => {
    const filtered = data?.filter(item => item.id === selectedDate)
    filtered && setFilteredData(filtered)
  }, [selectedDate])
  
  React.useEffect(() => {
    ScrollToTop()
    GET_CONTEST().then(r => {
      setData(r.data)
      const filtered = r.data?.filter(item => item.id === selectedDate)
      filtered && setFilteredData(filtered)
    })
  }, [])
  
  
  if(!filteredData) return <div className={c.loader}><Loader/></div>
  return (
    <div className={c.contests}>
      <div className={c.contests_title}>
        <h1>
          Конкурсы
        </h1>
      </div>
      {
        data?.length === 0 ? <p className={c.empty_text}><Empty/></p> :
        <ContestsBlock
        data={data}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        filteredData={filteredData}
      />
      }
    </div>
  );
}

export default Contests;