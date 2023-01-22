import React from 'react';
import c from './Contests.module.scss'
import {GET_CONTEST} from "../../api/api";
import {Loader} from "../../components/Loader/Loader";
import ContestsBlock from "../../components/ContestsBlock";

function Contests() {
  const [data, setData] = React.useState(null)
  const [filteredData, setFilteredData] = React.useState(null)
  const [selectedDate, setSelectedDate] = React.useState(1)
  
  React.useEffect(() => {
    const filtered = data?.filter(item => item.id === selectedDate)
    filtered && setFilteredData(filtered)
  }, [selectedDate])
  
  React.useEffect(() => {
    GET_CONTEST().then(r => {
      setData(r.data)
      const filtered = r.data?.filter(item => item.id === selectedDate)
      filtered && setFilteredData(filtered)
    })
  }, [])
  
  
  if(!filteredData) return <Loader/>
  return (
    <div className={c.contests}>
      <div className={c.contests_title}>
        <h1>
          Конкурсы
        </h1>
      </div>
      <ContestsBlock
        data={data}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        filteredData={filteredData}
      />
    </div>
  );
}

export default Contests;