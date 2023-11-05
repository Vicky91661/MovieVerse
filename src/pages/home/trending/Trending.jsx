import React, { useState } from 'react'

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTab from '../../../components/switchTabs/SwitchTab'
import useFetch from '../../../hooks/useFetch'
import Curousel from '../../../components/curousel/Curousel'

function Trending() {
    const [endpoint,setEndpoint] = useState("day")
    const {data,loading} = useFetch(`/trending/movie/${endpoint}`)

    const onTabChange=(tab)=>{
        setEndpoint(tab==="Day"?"day":"week")
    }


  return (
    <div className='carouselSection'>
          <ContentWrapper>
              <span className='carouselTitle'>Trending</span>
              <SwitchTab data={['Day','Week']} onTabChange={onTabChange}/>
          </ContentWrapper>
          <Curousel data={data?.results} loading={loading}/>

    </div>
  )
}

export default Trending